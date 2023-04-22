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
  curDepth: number;
  isSystem: boolean;
  nextDepth: React.Dispatch<React.SetStateAction<number>>;
  updateList: React.Dispatch<React.SetStateAction<number[]>>;
}

const Message = (props: Props) => {
  const [selected, setChoice] = useState(-1);
  const question: Data = questions;
  const choices: string[] = question[props.role][props.depth];
  const roles: string[] = ["신입사원", "대학생", "일반"];
  return (
    <MessageWrapper
      isSystem={props.isSystem}
      // opacity={0.25 * (4 - (props.curDepth - props.depth))}
      opacity={props.curDepth === props.depth ? 1 : 0.5}
    >
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
                choice_id={index}
                text={item}
                depth={props.depth}
                curDepth={props.curDepth}
                nextDepth={props.nextDepth}
                updateList={props.updateList}
              ></ChoiceButton>
            ))
          : choices.map((item, index) => (
              <ChoiceButton
                selected={selected}
                setChoice={setChoice}
                choice_id={index}
                text={item}
                depth={props.depth}
                curDepth={props.curDepth}
                nextDepth={props.nextDepth}
                updateList={props.updateList}
              ></ChoiceButton>
            ))}
      </ButtonsWrapper>
    </MessageWrapper>
  );
};
interface OpacityProps {
  opacity: number;
  isSystem: boolean;
}
const MessageWrapper = styled.div<OpacityProps>`
  box-sizing: border-box;
  display: flex;

  // min-width: 500rem;
  // width: 917rem;
  height: 90rem;

  // background: #838383;
  border: 1.2rem solid #838383;
  border-radius: 15rem;
  margin: 0 auto;
  margin-top: 50rem;
  ${(props) =>
    props.isSystem === true ? "margin-left: 0rem;" : "margin-right: 0rem;"}

  // transform: translate(50%, 0);
  opacity: ${(props) => props.opacity};
`;

const ProfileImageBox = styled.div`
  width: 140rem;
  height: 92rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionText = styled.span`
  width: 471rem;
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
