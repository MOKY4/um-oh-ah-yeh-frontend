import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeightBox from "@blocks/heightblock";
import WidthBox from "@blocks/widthblock";
import Message from "@blocks/message";
import LoadingImg from "@assets/images/Loading.png";
import { PageHeader, PageHeaderBack, Logo } from "@blocks/headers";
import HeaderLogo from "@assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import UserChoiceButton from "@blocks/userchoicebutton";
import SendLogo from "@assets/images/SendImg.png";
import ReloadImage from "@assets/images/reload.png";
import ResponseMessage from "@blocks/response";
import UserRequest from "@blocks/userrequest";
import PostResponse from "@assets/images/postresponse.png";
import { useRecoilState } from "recoil";
import {
  alertModal,
  copyModalState,
  copyModalisFirst,
} from "atoms/modalstates";
import AlertImg from "@assets/images/alertimage.png";
import * as AM from "@components/blocks/alertmodal";
import * as CM from "@components/blocks/copymodal";
import copyImage from "@assets/images/copyimage.png";

const Chat = () => {
  const [curDepth, nextDepth] = useState(1);
  const [choiceList, updateList] = useState<string[]>([]);
  const [role, setRole] = useState(0);
  const [to, setTo] = useState(-1);
  const [responses, setResponse] = useState<string[]>([]);
  const [curInput, setInput] = useState("");
  const [isAlertModalOn, setAlertModal] = useRecoilState(alertModal);
  const [isCopyModalOn, setCopyModal] = useRecoilState(copyModalState);
  const [isCopyFirst, setCopyFirst] = useRecoilState(copyModalisFirst);

  useEffect(() => {
    var question_div = document.getElementById("questions");
    if (question_div) {
      // question_div.scrollTop = question_div.scrollHeight;
      question_div.scrollTo({
        top: question_div.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [curDepth, choiceList, responses]);
  const navigate = useNavigate();
  const LogoButtonHandler = () => {
    navigate("/");
  };

  const ReloadHandler = () => {
    window.location.reload();
  };

  const SendHandler = () => {
    if (curDepth > 3) {
      setResponse((oldArray) => [...oldArray, curInput]);
      setInput("");
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
  const alertModalHander = () => {
    setAlertModal(false);
  };
  const copyModalHander = () => {
    setCopyModal(false);
    setCopyFirst(false);
  };
  return (
    <>
      <PageHeader>
        <Logo src={HeaderLogo} alt="" onClick={LogoButtonHandler}></Logo>
      </PageHeader>
      <PageHeaderBack></PageHeaderBack>
      <HeaderLine />
      <MainWrapper>
        {/* <RecordWrapper></RecordWrapper> */}
        <ChatWrapper>
          <ResponseWrapper id="questions">
            {/* <HeightBox height="400rem" /> */}
            {curDepth >= 1 ? (
              <Message
                name="음"
                question="당신은 누구인가요?"
                depth={1}
                role={role}
                curDepth={curDepth}
                isSystem={true}
                choiceList={choiceList}
                to={to}
                setTo={setTo}
                setRole={setRole}
                nextDepth={nextDepth}
                updateList={updateList}
              />
            ) : (
              <></>
            )}
            {curDepth >= 2 ? (
              <Message
                name="음"
                question="누구에게 레터를 작성하나요?"
                depth={2}
                role={role}
                curDepth={curDepth}
                isSystem={true}
                choiceList={choiceList}
                to={to}
                setTo={setTo}
                setRole={setRole}
                nextDepth={nextDepth}
                updateList={updateList}
              />
            ) : (
              <></>
            )}
            {curDepth >= 3 && to !== -1 ? (
              <Message
                name="음"
                question="어떤 상황의 글을 작성하나요?"
                depth={3}
                role={role}
                curDepth={curDepth}
                isSystem={true}
                choiceList={choiceList}
                to={to}
                setTo={setTo}
                setRole={setRole}
                nextDepth={nextDepth}
                updateList={updateList}
              />
            ) : (
              <></>
            )}
            {curDepth >= 4 ? (
              <>
                <LoadingWrapper>
                  <HeightBox height="210rem" />
                  <Loading src={LoadingImg} alt="" />
                  <HeightBox height="210rem" />
                </LoadingWrapper>
                <ResponseMessage text="응답 텍스트"></ResponseMessage>
                <PostResponseImg src={PostResponse} alt="" />
                {responses ? (
                  responses.map((item) => <UserRequest text={item} />)
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </ResponseWrapper>
          <InputReloadWrapper>
            <ReloadButton onClick={ReloadHandler}>
              <ReloadImg src={ReloadImage} alt=""></ReloadImg>
              <ReloadText>다시하기</ReloadText>
            </ReloadButton>
            <InputWrapper>
              <ChoicesWrapper>
                {choiceList ? (
                  choiceList.map((item) => <UserChoiceButton text={item} />)
                ) : (
                  <></>
                )}
              </ChoicesWrapper>
              <HeightBox height="20rem" />
              <InputSendWrapper>
                {curDepth > 3 ? (
                  <InputBox
                    onChange={changeHandler}
                    value={curInput}
                    onKeyPress={enterHandler}
                  ></InputBox>
                ) : (
                  <InputBox placeholder="3번의 질문에 응답한 후 더 구체적인 상황을 쓸 수 있어요"></InputBox>
                )}

                <WidthBox width="35rem" />
                <SendWrapper curDepth={curDepth} onClick={SendHandler}>
                  <SendText>보내기</SendText>
                  <WidthBox width="10rem" />
                  <SendImg src={SendLogo} alt=""></SendImg>
                </SendWrapper>
              </InputSendWrapper>
            </InputWrapper>
          </InputReloadWrapper>
        </ChatWrapper>
      </MainWrapper>
      {isAlertModalOn ? (
        <AM.ModalBackground>
          <AM.ModalWrapper>
            <AM.ModalAlertImg src={AlertImg} alt="" />
            <AM.ModalAlertText>
              한 번 고른 항목은 바꿀 수 없어요
              <br />
              <AM.BlueText>다시하기</AM.BlueText>를 눌러주세요!
            </AM.ModalAlertText>
            <AM.ModalCloseButton onClick={alertModalHander}>
              확인
            </AM.ModalCloseButton>
          </AM.ModalWrapper>
        </AM.ModalBackground>
      ) : (
        <></>
      )}

      {isCopyFirst && isCopyModalOn ? (
        <CM.ModalBackground>
          <CM.ModalWrapper>
            <CM.ModalCopyImg src={copyImage} alt="" />
            <CM.ModalCopyText>
              클립보드에 복사되었습니다!
              <br />
              성공적인 글쓰기를 응원해요
            </CM.ModalCopyText>
            <CM.ModalCloseButton onClick={copyModalHander}>
              확인
            </CM.ModalCloseButton>
          </CM.ModalWrapper>
        </CM.ModalBackground>
      ) : (
        <></>
      )}
    </>
  );
};

export default Chat;

const HeaderLine = styled.div`
  height: 0.5rem;
  background: #838383;
`;

const MainWrapper = styled.div`
  display: flex;
  // height: 200rem;
  justify-content: center;
`;

const ChatWrapper = styled.div`
  width: 1270rem;
  height: ${window.innerHeight - (80 / 1920) * window.innerWidth - 1}px;
  display: flex;
  flex-direction: column;
  // align-item: center;
  justify-content: space-between;
`;

const ResponseWrapper = styled.div`
  height: 835rem;
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
  height: 205rem;
  width: 1270rem;
  background: #fdfdfd;
  /* 2 */

  border: 1px solid #838383;
  border-radius: 20rem;
  margin: 0 auto;
  margin-bottom: 90rem;
  // display: flex;
`;

const Loading = styled.img`
  width: 423rem;
  height: 88rem;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChoicesWrapper = styled.div`
  display: flex;
  height: 33rem;
  margin-top: 26.19rem;
  margin-left: 30rem;
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
  /* GRAY 01 */

  background: #f0f0f0;
  /* GRAY 02 */

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

  /* GRAY 03 */

  color: #424242;
`;

interface SendType {
  curDepth: number;
}

const SendWrapper = styled.div<SendType>`
  width: 155rem;
  height: 50rem;

  /* GRAY 01 */
  ${(props) =>
    props.curDepth > 3
      ? "background: #FF983B;cursor: pointer;"
      : "background: #F0F0F0;"}

  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SendText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 23rem;
  /* identical to box height, or 144% */

  text-align: center;

  /* GRAY 00 */

  color: #ffffff;
`;
const SendImg = styled.img`
  /* Icon shape */

  width: 13rem;
  height: 13rem;

  /* GRAY 00 */
`;

const ReloadButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5rem 10rem;
  gap: 5rem;

  // position: absolute;
  width: 112rem;
  height: 36rem;
  // left: 1479rem;
  // top: 733rem;
  cursor: pointer;
  margin-bottom: 10rem;
`;

const ReloadImg = styled.img`
  width: 24rem;
  height: 24rem;
`;

const ReloadText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 23rem;
  /* identical to box height, or 135% */

  color: #838383;
`;

const InputReloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const PostResponseImg = styled.img`
  width: 311rem;
  height: 151.57rem;
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 44rem;
`;
