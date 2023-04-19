import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainLogo from "@assets/images/MainLogo.png";
import HeightBox from "@blocks/heightblock";
import WidthBox from "@blocks/widthblock";

const Main = () => {
  const navigate = useNavigate();
  const ButtonHandler = () => {
    navigate("/chat");
  };
  return (
    <MainWrapper>
      <CenterWrapper>
        <HeightBox height="166rem" />
        <CenterContents>
          <TextColumn>
            <CenterFirstText>
              글을 쓰기 어려운 상황, <br />
              고민하고 검색할 시간에 <br />
              맞춤 레터 서비스와 함께!
            </CenterFirstText>
            <HeightBox height="31rem" />
            <CenterSecondText>
              글쓰기에 어려움을 느끼는 신입사원과 대학생을 <br />
              위한 맞춤 레터를 선보입니다. 글쓰기에 어려움을 <br />
              느끼는 신입사원과 대학생을 위한 맞춤 레터를.
            </CenterSecondText>
          </TextColumn>
          <WidthBox width="99rem" />
          <Imgbox src={MainLogo} alt=""></Imgbox>
        </CenterContents>
        <HeightBox height="98rem" />
        <ButtonWrapper>
          <Button onClick={ButtonHandler}>
            <ButtonText>고민 걱정 없이, 시작하기</ButtonText>
          </Button>
        </ButtonWrapper>
      </CenterWrapper>
      <HeightBox height="67rem" />
      <DescWrapper>
        <DescFirstText>
          umm...서비스는 <br />
          어떻게 진행되나요?
        </DescFirstText>
        <DescRightWrapper>
          <DescRightColumn>
            <DescRightFirstText>
              4가지의 <br />
              딥한 챕터
            </DescRightFirstText>
            <DescRightSecondText>
              구체적인 설명을 <br />
              적어주세요.
            </DescRightSecondText>
          </DescRightColumn>
          <DescRightColumn>
            <DescRightFirstText>
              가독성있는 <br />
              ui 시각적 변화
            </DescRightFirstText>
            <DescRightSecondText>
              구체적인 설명을 <br />
              적어주세요.
            </DescRightSecondText>
          </DescRightColumn>
          <DescRightColumn>
            <DescRightFirstText>
              레터
              <br />
              커스터마이징
            </DescRightFirstText>
            <DescRightSecondText>
              구체적인 설명을 <br />
              적어주세요.
            </DescRightSecondText>
          </DescRightColumn>
        </DescRightWrapper>
      </DescWrapper>
      <HeightBox height="67rem" />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  text-align: center;
`;

const CenterWrapper = styled.div`
  height: 760rem;
  background: #e7f5ff;
`;

const CenterContents = styled.div`
  height: 298rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextColumn = styled.div`
  width: 389rem;
  height: 289rem;
  text-align: left;
`;

const CenterFirstText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 40rem;
  line-height: 56rem;

  color: #292929;
  white-space: pre-line;
`;

const CenterSecondText = styled.span`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 20rem;
  line-height: 150%;

  letter-spacing: -0.022rem;

  color: #1e1e1e;
  white-space: pre-line;
`;

const Imgbox = styled.img`
  width: 496.25rem;
  height: 198.46rem;
`;

const ButtonWrapper = styled.div`
  height: 102rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  gap: 10px;

  width: 540px;
  height: 82px;

  border: solid 1px #3a79e3;
  background: #3a79e3;
  border-radius: 20px;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 30rem;
  line-height: 42rem;
  /* identical to box height */

  color: #ffffff;
`;

const DescWrapper = styled.div`
  width: 1051rem;
  height: 176rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescFirstText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 25rem;
  line-height: 35rem;
  text-align: center;

  color: #2e2e2e;
`;

const DescRightWrapper = styled.div`
  width: 589rem;
  height: 176rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescRightColumn = styled.div`
  width: 142rem;
  height: 176rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const DescRightFirstText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 25rem;
  line-height: 35rem;
  text-align: center;

  color: #424242;
`;
const DescRightSecondText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 20rem;
  line-height: 28rem;
  text-align: center;

  color: #8c8c8c;
`;
