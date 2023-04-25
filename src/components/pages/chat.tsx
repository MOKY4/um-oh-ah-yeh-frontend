import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import HeightBox from "@blocks/heightblock";
import WidthBox from "@blocks/widthblock";
import Message from "@blocks/message";
import ResponseMessage from "@blocks/response";
import UserRequest from "@blocks/userrequest";
import AlertModal from "@blocks/alertmodal";
import CopyModal from "@blocks/copymodal";
import GPTLoading from "@blocks/gptloding";
import GPTError from "@blocks/gpterror";
import ChatHeader from "@blocks/chatheader";
import ResponseLoading from "@blocks/responseloading";
import SendButton from "@blocks/sendbutton";
import ReloadButton from "@blocks/reloadbutton";
import UserChoiceList from "@blocks/userchoicelist";

import { useRecoilState } from "recoil";
import {
  alertModal,
  copyModalState,
  copyModalisFirst,
} from "atoms/modalstates";
import { choiceListState, depthState } from "atoms/messagestates";

const Chat = () => {
  const [curDepth] = useRecoilState(depthState);
  const [choiceList] = useRecoilState(choiceListState);
  const [isAlertModalOn] = useRecoilState(alertModal);
  const [isCopyModalOn] = useRecoilState(copyModalState);
  const [isCopyFirst] = useRecoilState(copyModalisFirst);
  const [responses, setResponse] = useState<string[]>([]);
  const [curInput, setInput] = useState("");
  const [sendMsg, setSendMsg] = useState(false);
  const [onError, setError] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);

  const webSocketUrl = process.env.REACT_APP_API_ENDPOINT!;
  let ws = useRef<WebSocket | null>(null);
  const questionList = [
    "당신은 누구인가요?",
    "누구에게 레터를 작성하나요?",
    "어떤 상황의 글을 작성하나요?",
  ];

  useEffect(() => {
    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
      ws.current.onopen = () => {
        setSocketConnected(true);
      };
      ws.current.onclose = () => {};
    }
    return () => {
      ws.current?.close();
    };
  }, [webSocketUrl]);

  useEffect(() => {
    if (socketConnected) {
      if (ws.current) {
        ws.current.send(
          JSON.stringify({
            action: "sendmessage",
            message: "글 좀 써줘",
          })
        );
      }
      setSendMsg(true);
    }
  }, [socketConnected]);

  useEffect(() => {
    if (sendMsg) {
      if (ws.current) {
        ws.current.onmessage = (e: MessageEvent) => {
          const data = e.data;
          if (data[0] === "{" && data[data.length - 1] === "}") {
            if (data.includes("Internal server error")) {
              setError(true);
            }
          } else {
            setResponse((oldArray) => [...oldArray, e.data]);
          }
        };
      }
    }
  }, [sendMsg]);

  useEffect(() => {
    if (curDepth === 4) {
      if (ws.current) {
        ws.current.send(
          JSON.stringify({
            action: "sendmessage",
            message: `나는 ${choiceList[0]}이고, ${choiceList[1]}에게, ${choiceList[2]}을 할거야`,
          })
        );
      }
    }
  }, [curDepth, choiceList]);

  useEffect(() => {
    var question_div = document.getElementById("questions");
    if (question_div) {
      question_div.scrollTo({
        top: question_div.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [curDepth, choiceList, responses]);

  const SendHandler = () => {
    if (curDepth > 3 && curInput.length !== 0 && responses.length % 2 !== 1) {
      setResponse((oldArray) => [...oldArray, curInput]);
      setInput("");
      if (ws.current) {
        ws.current.send(
          JSON.stringify({
            action: "sendmessage",
            message: curInput,
          })
        );
      }
    }
  };

  const changeHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(e.target.value);
  };

  const enterHandler = (e: { key: string }) => {
    if (e.key === "Enter") {
      SendHandler();
    }
  };

  if (onError) {
    return (
      <>
        <ChatHeader />
        <HeightBox height="342rem" />
        <GPTError />
      </>
    );
  }

  if (responses.length === 0) {
    return (
      <>
        <ChatHeader />
        <HeightBox height="220rem" />
        <GPTLoading />
      </>
    );
  }

  return (
    <>
      <ChatHeader />
      <MainWrapper>
        <ChatWrapper>
          <ResponseWrapper id="questions">
            {questionList.map(
              (question, index) =>
                curDepth >= index + 1 && (
                  <Message question={question} depth={index + 1} />
                )
            )}
            {curDepth >= 4 && (
              <>
                {responses &&
                  responses.map((item, index) =>
                    index % 2 === 1 ? (
                      <ResponseMessage
                        key={item}
                        text={item}
                        responseID={index}
                      />
                    ) : (
                      index !== 0 && <UserRequest text={item} />
                    )
                  )}
                {responses && responses.length % 2 === 1 && <ResponseLoading />}
              </>
            )}
          </ResponseWrapper>
          <InputReloadWrapper>
            <ReloadButton />
            <InputWrapper>
              <UserChoiceList />
              <HeightBox height="20rem" />
              <InputSendWrapper>
                {curDepth > 3 ? (
                  <InputBox
                    onChange={changeHandler}
                    value={curInput || ""}
                    onKeyPress={enterHandler}
                  ></InputBox>
                ) : (
                  <InputBox
                    placeholder="3가지 질문에 먼저 응답 후 쓸 수 있어요!"
                    readOnly
                  ></InputBox>
                )}
                <WidthBox width="35rem" />
                <SendButton
                  len={responses.length}
                  curDepth={curDepth}
                  SendHandler={SendHandler}
                />
              </InputSendWrapper>
            </InputWrapper>
          </InputReloadWrapper>
        </ChatWrapper>
      </MainWrapper>
      {isAlertModalOn && <AlertModal />}
      {isCopyFirst && isCopyModalOn && <CopyModal />}
    </>
  );
};

export default Chat;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ChatWrapper = styled.div`
  width: 1270rem;
  height: ${window.innerHeight - (80 / 1920) * window.innerWidth - 1}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ResponseWrapper = styled.div`
  height: ${window.innerHeight - (400 / 1920) * window.innerWidth}px;
  width: 1270rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const InputWrapper = styled.div`
  height: 199rem;
  width: 1270rem;
  background: #fdfdfd;
  border: 1px solid #838383;
  border-radius: 20rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 50rem;
`;

const InputSendWrapper = styled.div`
  display: flex;
  margin-left: 30rem;
  align-items: center;
`;

const InputBox = styled.input`
  width: 970rem;
  height: 76rem;
  padding-left: 30rem;
  background: #f0f0f0;
  border: 1.2rem solid #838383;
  border-radius: 15rem;
  &:focus {
    outline: none;
  }
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 22rem;
  color: #424242;
`;

const InputReloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
