import React from "react";
import styled from "styled-components";
import HeightBox from "@blocks/heightblock";
import WidthBox from "@blocks/widthblock";
import Message from "@blocks/message";

const Chat = () => {
  return (
    <>
      <HeaderLine />
      <MainWrapper>
        <RecordWrapper></RecordWrapper>
        <ChatWrapper>
          <ResponseWrapper>
            <Message
              name="음"
              question="당신은 누구인가요?"
              depth={1}
              role={0}
            />
            <Message
              name="음"
              question="누구에게 레터를 작성하나요?"
              depth={2}
              role={0}
            />
            <Message
              name="음"
              question="어떤 상황의 글을 작성하나요?"
              depth={3}
              role={0}
            />
            <Message
              name="음"
              question="네 좋아요. 마지막으로 글에 대한 자세한 설명을 적어주세요."
              depth={4}
              role={0}
            />
          </ResponseWrapper>
          <HeightBox height="263rem" />
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
`;

const RecordWrapper = styled.div`
  width: 288rem;
  height: ${window.innerHeight - (90 / 1920) * window.innerWidth - 1}px;
  // height: 100%;
  background: #e7f5ff;
`;

const ChatWrapper = styled.div`
  width: 1630rem;
  height: ${window.innerHeight - (90 / 1920) * window.innerWidth - 1}px;
  display: flex;
  flex-direction: column;
  align-item: center;
  // justify-content: space-between;
`;

const ResponseWrapper = styled.div`
  height: 467rem;
  // display: flex;
  flex-direction: column;
  // align-items: flex-end;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const InputWrapper = styled.div`
  height: 204rem;
  width: 1262rem;
  background: #fdfdfd;
  /* 2 */

  border: 1px solid #838383;
  border-radius: 20rem;
  margin: 0 auto;
  margin-bottom: 56rem;
`;
