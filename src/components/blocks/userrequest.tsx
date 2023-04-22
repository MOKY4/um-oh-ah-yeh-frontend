import React from "react";
import styled from "styled-components";
import UserImg from "@assets/images/Userthumb.png";

interface Props {
  text: string;
}

const UserRequest = (props: Props) => {
  return (
    <MainWrapper>
      <ResponseWrapper>
        <ResponseText>{props.text}</ResponseText>
        <ResponseImg src={UserImg} alt="" />
      </ResponseWrapper>
    </MainWrapper>
  );
};

export default UserRequest;

const MainWrapper = styled.div`
  width: 1267rem;
  height: 114rem;
  background: #ffe1c6;
  /* SUB COLOR 05 */

  border: 1.2rem solid #ff983b;
  border-radius: 15rem;
  margin-bottom: 60rem;
`;

const ResponseWrapper = styled.div`
  display: flex;
  margin-top: 25rem;
  margin-bottom: 25rem;
  align-items: center;
`;

const ResponseText = styled.span`
    width: 1127rem;
    margin-left: 50rem;
    margin-right: 20rem:
    font-family: 'AppleSDGothicNeoM00';
    font-style: normal;
    font-weight: 400;
    font-size: 17rem;
    line-height: 32rem;
    /* or 188% */

    text-align: left;
    /* GRAY 03 */

    color: #424242;
`;

const ResponseImg = styled.img`
  width: 40rem;
  height: 40rem;
`;
