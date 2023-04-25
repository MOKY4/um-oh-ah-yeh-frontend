import React from "react";
import styled from "styled-components";
import { alertModal } from "atoms/modalstates";
import { useRecoilState } from "recoil";
import {
  choiceListState,
  depthState,
  roleState,
  toState,
} from "atoms/MessageStates";

interface Props {
  selected: number;
  setChoice: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  choice_id: number;
  depth: number;
}

const ChoiceButton = (props: Props) => {
  const [, setAlertModal] = useRecoilState(alertModal);
  const [curDepth, nextDepth] = useRecoilState(depthState);
  const [, updateList] = useRecoilState(choiceListState);
  const [, setRole] = useRecoilState(roleState);
  const [, setTo] = useRecoilState(toState);

  const onClickHandler = () => {
    if (props.depth === curDepth) {
      if (props.depth === 1) {
        setRole(props.choice_id);
      }
      if (props.depth === 2) {
        setTo(props.choice_id);
      }
      props.setChoice(props.choice_id);
      nextDepth(props.depth + 1);
      updateList((oldArray) => [...oldArray, props.text]);
    } else {
      setAlertModal(true);
    }
  };
  return props.choice_id === props.selected ? (
    <Choiced>{props.text}</Choiced>
  ) : (
    <NotChoiced onClick={onClickHandler}>{props.text}</NotChoiced>
  );
};

export default ChoiceButton;

const NotChoiced = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 20rem;
  height: 32rem;
  background: #f0f0f0;
  border: 1.3rem solid #f0f0f0;
  border-radius: 10rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 22rem;
  text-align: center;
  color: #424242;
  margin-right: 20rem;
`;

const Choiced = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 20rem;
  background: #cce1ff;
  border: 1.3rem solid #3a79e3;
  border-radius: 10rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 22rem;
  text-align: center;
  color: #424242;
  margin-right: 20rem;
`;
