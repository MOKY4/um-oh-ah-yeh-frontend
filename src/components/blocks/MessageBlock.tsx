import React, { useState } from "react";
import styled from "styled-components";
import ChoiceButton from "./ChoiceButtonBlocl";
import questions from "@assets/data/questions.json";
import SystemThumb from "@assets/images/SystemThumb.png";
import WidthBox from "./WidthBlock";
import { useRecoilState } from "recoil";
import { depthState, roleState, toState } from "atoms/MessageStates";

interface DataType {
  [key: number]: {
    "2": string[];
    "3": { [key: number]: string[] };
  };
}

interface Props {
  question: string;
  depth: number;
}

interface OpacityProps {
  opacity: number;
}

const Message = (props: Props) => {
  const [curDepth] = useRecoilState(depthState);
  const [role] = useRecoilState(roleState);
  const [to] = useRecoilState(toState);

  const [selected, setChoice] = useState(-1);
  const question: DataType = questions;

  return (
    <MessageWrapper opacity={curDepth === props.depth ? 1 : 0.5}>
      <ProfileImageBox>
        <SystemImg src={SystemThumb} alt="" />
      </ProfileImageBox>
      <QuestionText>{props.question}</QuestionText>
      <ButtonsWrapper>
        {props.depth === 1 ? (
          ["신입사원", "대학생", "일반"].map((item, index) => (
            <ChoiceButton
              key={item}
              selected={selected}
              setChoice={setChoice}
              choice_id={index}
              text={item}
              depth={props.depth}
            ></ChoiceButton>
          ))
        ) : (
          <></>
        )}
        {props.depth === 2 ? (
          question[role][2].map((item, index) => (
            <ChoiceButton
              key={item}
              selected={selected}
              setChoice={setChoice}
              choice_id={index}
              text={item}
              depth={props.depth}
            ></ChoiceButton>
          ))
        ) : (
          <></>
        )}
        {props.depth === 3 ? (
          question[role][3][to].map((item, index) => (
            <ChoiceButton
              key={item}
              selected={selected}
              setChoice={setChoice}
              choice_id={index}
              text={item}
              depth={props.depth}
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

const MessageWrapper = styled.div<OpacityProps>`
  box-sizing: border-box;
  display: flex;
  height: 90rem;
  border: 1.2rem solid #838383;
  border-radius: 15rem;
  margin: 0 auto;
  margin-top: 50rem;
  margin-left: 0rem;
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
