import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeightBox from "@blocks/heightblock";
import WidthBox from "@blocks/widthblock";
import Message from "@blocks/message";
import LoadingImg from "@assets/images/Loading.png";
const Chat = () => {
  const [curDepth, nextDepth] = useState(1);
  const [choiceList, updateList] = useState<number[]>([]);
  useEffect(() => {
    var question_div = document.getElementById("questions");
    if (question_div) {
      // question_div.scrollTop = question_div.scrollHeight;
      question_div.scrollTo({
        top: question_div.scrollHeight,
        behavior: "smooth",
      });
    }
    console.log(choiceList);
  }, [curDepth, choiceList]);
  return (
    <>
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
                role={0}
                curDepth={curDepth}
                isSystem={true}
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
                role={0}
                curDepth={curDepth}
                isSystem={true}
                nextDepth={nextDepth}
                updateList={updateList}
              />
            ) : (
              <></>
            )}
            {curDepth >= 3 ? (
              <Message
                name="음"
                question="어떤 상황의 글을 작성하나요?"
                depth={3}
                role={0}
                curDepth={curDepth}
                isSystem={true}
                nextDepth={nextDepth}
                updateList={updateList}
              />
            ) : (
              <></>
            )}
            {curDepth >= 4 ? (
              <LoadingWrapper>
                <HeightBox height="210rem" />
                <Loading src={LoadingImg} alt="" />
                <HeightBox height="210rem" />
              </LoadingWrapper>
            ) : (
              <></>
            )}
            {/* {curDepth >= 4 ? (
              <Message
                name="음"
                question="네 좋아요. 마지막으로 글에 대한 자세한 설명을 적어주세요."
                depth={4}
                role={0}
                curDepth={curDepth}
                isSystem={true}
                nextDepth={nextDepth}
                updateList={updateList}
              />
            ) : (
              <></>
            )} */}
          </ResponseWrapper>
          {/* <HeightBox height="263rem" /> */}
          <InputWrapper></InputWrapper>
        </ChatWrapper>
      </MainWrapper>
    </>
  );
};

export default Chat;

const HeaderLine = styled.div`
  height: 1rem;
  background: #838383;
`;

const MainWrapper = styled.div`
  display: flex;
  // height: 200rem;
  justify-content: center;
`;

const ChatWrapper = styled.div`
  width: 1270rem;
  height: ${window.innerHeight - (90 / 1920) * window.innerWidth - 1}px;
  display: flex;
  flex-direction: column;
  align-item: center;
  // justify-content: space-between;
`;

const ResponseWrapper = styled.div`
  height: 635rem;
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
  margin-bottom: 56rem;
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
