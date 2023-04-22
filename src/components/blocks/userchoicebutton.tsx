import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const UserChoiceButton = (props: Props) => {
  return <Choiced>{props.text}</Choiced>;
};

export default UserChoiceButton;

const Choiced = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem 20rem;

  // width: 100rem;
  // height: 32rem;

  background: #ffe1c6;
  border: 1.2rem solid #ff983b;
  border-radius: 10rem;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 23rem;
  text-align: center;

  /* 1 */

  color: #424242;
  margin-right: 15rem;
`;
