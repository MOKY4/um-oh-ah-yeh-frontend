import React from "react";
import styled from "styled-components";

interface Props {
  selected: number;
  setChoice: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  choice_id: number;
  depth: number;
  curDepth: number;
  setTo: React.Dispatch<React.SetStateAction<number>>;
  setRole: React.Dispatch<React.SetStateAction<number>>;
  nextDepth: React.Dispatch<React.SetStateAction<number>>;
  updateList: React.Dispatch<React.SetStateAction<string[]>>;
}

const ChoiceButton = (props: Props) => {
  const onClickHandler = () => {
    if (props.depth === 1) {
      props.setRole(props.choice_id);
    }
    if (props.depth === 2) {
      props.setTo(props.choice_id);
    }

    if (props.depth === props.curDepth) {
      props.setChoice(props.choice_id);
      props.nextDepth(props.depth + 1);
      props.updateList((oldArray) => [...oldArray, props.text]);
    } else {
      alert("한 번 고른 항목은 바꿀 수 없어요ㅠㅠ\n다시하기를 눌러주세요!");
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

  // width: 100rem;
  height: 32rem;

  background: #f0f0f0;
  border: 1.3rem solid #f0f0f0;
  border-radius: 10rem;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 22rem;
  text-align: center;

  /* 1 */

  color: #424242;
  margin-right: 20rem;
`;

const Choiced = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem 20rem;

  // width: 100rem;
  // height: 32rem;

  background: #cce1ff;
  border: 1.3rem solid #3a79e3;
  border-radius: 10rem;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 22rem;
  text-align: center;

  /* 1 */

  color: #424242;
  margin-right: 20rem;
`;
