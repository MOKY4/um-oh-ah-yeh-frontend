import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <CenterWrapper>
        <SizedBox1></SizedBox1>
        <CenterContents>
          <TextColumn>
            글을 쓰기 어려운 상황, 고민하고 검색할 시간에 맞춤 레터 서비스와
            함께!
          </TextColumn>
          <SizedBox2></SizedBox2>
          <Imgbox>img</Imgbox>
        </CenterContents>
      </CenterWrapper>
      <Link to="/chat">시작하기</Link>
      <h1>{window.innerWidth}</h1>
    </>
  );
};

export default Main;

const CenterWrapper = styled.div`
  height: 760rem;
  background: #e7f5ff;
`;

const SizedBox1 = styled.div`
  height: 166rem;
`;
const CenterContents = styled.div`
  height: 298rem;
  background: #e7f500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SizedBox2 = styled.div`
  width: 99rem;
`;

const TextColumn = styled.div`
  width: 389rem;
  height: 289rem;
  background: blue;
`;

const FirstText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 40rem;
  line-height: 56rem;

  color: #292929;
`;

const SecondText = styled.span``;

const Imgbox = styled.div`
  width: 496.25rem;
  height: 198.46rem;
  background: black;
`;
