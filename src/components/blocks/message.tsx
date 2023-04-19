import React, { useState } from "react";
import styled from "styled-components";
import ChoiceButton from "./choicebutton";
import questions from "@assets/data/questions.json";

interface Data {
  [key: number]: {
    [key: number]: string[];
  };
}

interface Props {
  name: string;
  question: string;
  depth: number;
  role: number;
}

const Message = (props: Props) => {
  const [selected, setChoice] = useState(-1);
  const question: Data = questions;
  const choices: string[] = question[props.role][props.depth];
  const roles: string[] = ["신입사원", "대학생", "일반"];
  console.log(choices);
  return (
    <MessageWrapper>
      <ProfileImageBox>
        <Circle>{props.name}</Circle>
      </ProfileImageBox>
      <QuestionText>{props.question}</QuestionText>
      <ButtonsWrapper>
        {props.depth === 1
          ? roles.map((item, index) => (
              <ChoiceButton
                selected={selected}
                setChoice={setChoice}
                id={index}
                text={item}
              ></ChoiceButton>
            ))
          : choices.map((item, index) => (
              <ChoiceButton
                selected={selected}
                setChoice={setChoice}
                id={index}
                text={item}
              ></ChoiceButton>
            ))}

        {/* <ChoiceButton
          selected={selected}
          setChoice={setChoice}
          id={1}
          text="업무 요청"
        ></ChoiceButton>
        <ChoiceButton
          selected={selected}
          setChoice={setChoice}
          id={2}
          text="업무 보고"
        ></ChoiceButton>
        <ChoiceButton
          selected={selected}
          setChoice={setChoice}
          id={3}
          text="업무 변경"
        ></ChoiceButton>
        <ChoiceButton
          selected={selected}
          setChoice={setChoice}
          id={4}
          text="결재 보고"
        ></ChoiceButton> */}
      </ButtonsWrapper>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;

  min-width: 500rem;
  width: 1271rem;
  height: 92rem;

  background: #f2faff;
  border: 1.2rem solid #3a79e3;
  border-radius: 15rem;
  margin: 0 auto;
  margin-top: 50rem;
`;

const ProfileImageBox = styled.div`
  width: 140rem;
  height: 92rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionText = styled.span`
  width: 500rem;
  text-align: left;
  margin: auto 0;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 22rem;
  color: #424242;
`;

const Circle = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 20rem;
  background: #97c1ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 20rem;
  line-height: 28rem;
  text-align: center;

  color: #ffffff;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Message;
