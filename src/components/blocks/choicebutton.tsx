import React from "react";
import styled from "styled-components";

interface Props {
  selected: number;
  setChoice: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  id: number;
}

const ChoiceButton = (props: Props) => {
  const onClickHandler = () => {
    props.setChoice(props.id);
  };
  return props.id === props.selected ? (
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

  //   padding: 5rem 20rem;

  width: 100rem;
  height: 32rem;

  background: #f0f0f0;
  border: 0px solid #3a79e3;
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

  // padding: 5rem 20rem;

  width: 100rem;
  height: 32rem;

  background: #cce1ff;
  border: 1.3px solid #3a79e3;
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
