import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChoiceButton from "./choicebutton";
import questions from "@assets/data/questions.json";
import SystemThumb from "@assets/images/SystemThumb.png";
import WidthBox from "./widthblock";

interface DataType {
  [key: number]: {
    "2": string[];
    "3": { [key: number]: string[] };
  };
}

interface Props {
  name: string;
  question: string;
  depth: number;
  role: number;
  curDepth: number;
  isSystem: boolean;
  choiceList: string[];
  to: number;
  setTo: React.Dispatch<React.SetStateAction<number>>;
  setRole: React.Dispatch<React.SetStateAction<number>>;
  nextDepth: React.Dispatch<React.SetStateAction<number>>;
  updateList: React.Dispatch<React.SetStateAction<string[]>>;
}

const Message = (props: Props) => {
  const [selected, setChoice] = useState(-1);
  const question: DataType = questions;

  return (
    <MessageWrapper
      isSystem={props.isSystem}
      opacity={props.curDepth === props.depth ? 1 : 0.5}
    >
      <ProfileImageBox>
        <SystemImg src={SystemThumb} alt="" />
      </ProfileImageBox>
      <QuestionText>{props.question}</QuestionText>
      <ButtonsWrapper>
        {props.depth === 1 ? (
          ["신입사원", "대학생", "일반"].map((item, index) => (
            <ChoiceButton
              selected={selected}
              setChoice={setChoice}
              choice_id={index}
              text={item}
              depth={props.depth}
              curDepth={props.curDepth}
              setTo={props.setTo}
              setRole={props.setRole}
              nextDepth={props.nextDepth}
              updateList={props.updateList}
            ></ChoiceButton>
          ))
        ) : (
          <></>
        )}
        {props.depth === 2 ? (
          question[props.role][2].map((item, index) => (
            <ChoiceButton
              selected={selected}
              setChoice={setChoice}
              choice_id={index}
              text={item}
              depth={props.depth}
              curDepth={props.curDepth}
              setTo={props.setTo}
              setRole={props.setRole}
              nextDepth={props.nextDepth}
              updateList={props.updateList}
            ></ChoiceButton>
          ))
        ) : (
          <></>
        )}
        {props.depth === 3 ? (
          question[props.role][3][props.to].map((item, index) => (
            <ChoiceButton
              selected={selected}
              setChoice={setChoice}
              choice_id={index}
              text={item}
              depth={props.depth}
              curDepth={props.curDepth}
              setTo={props.setTo}
              setRole={props.setRole}
              nextDepth={props.nextDepth}
              updateList={props.updateList}
            ></ChoiceButton>
          ))
        ) : (
          <></>
        )}
        <WidthBox width="30rem" />
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
  width: 90rem;
  height: 92rem;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 20rem;
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

const SystemImg = styled.img`
  width: 40rem;
  height: 40rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Message;
