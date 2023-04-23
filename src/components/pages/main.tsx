import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainLogo from "@assets/images/MainLogo.png";
import HeightBox from "@blocks/heightblock";
import WidthBox from "@blocks/widthblock";
import { PageHeader, PageHeaderBack, Logo } from "@blocks/headers";
import HeaderLogo from "@assets/images/logo.png";
import ummImage from "@assets/images/ummImage.png";
import SecondDescIMG1 from "@assets/images/SecondDesc1.png";
import SecondDescIMG2 from "@assets/images/SecondDesc2.png";
import FooterLogo from "@assets/images/footerlogo.png";
import githubimg from "@assets/images/githublogo.png";
import mobilemain from "@assets/images/mobilemain.png";

const Main = () => {
  const navigate = useNavigate();
  const ButtonHandler = () => {
    navigate("/chat");
  };
  const LogoButtonHandler = () => {
    navigate("/");
  };
  const GithubHandler = (link: string) => {
    window.location.href = link;
  };
  const isMobile = function () {
    const match = window.matchMedia("(pointer:coarse)");
    return match && match.matches;
  };
  if (isMobile()) {
    return (
      <MobileWrapper>
        <MobileModalWrapper>
          <MobileIMG src={mobilemain} alt="" />
          <HeightBox height="20px" />
          <MobileText>PC 웹으로 접속해주세요!</MobileText>
        </MobileModalWrapper>
      </MobileWrapper>
    );
  }

  return (
    <MainWrapper>
      <PageHeader>
        <Logo src={HeaderLogo} alt="" onClick={LogoButtonHandler}></Logo>
      </PageHeader>
      <PageHeaderBack></PageHeaderBack>
      <CenterWrapper>
        <HeightBox height="166rem" />
        <CenterContents>
          <TextColumn>
            <CenterFirstText>
              글을 쓰기 막막한 당신, <br />
              고민하고 검색하지 말고 <br />
              맞춤 레터 서비스로 한방에!
            </CenterFirstText>
            <HeightBox height="31rem" />
            <CenterSecondText>
              메일쓰기에 어려움을 느끼는 신입사원과 대학생을 위한 <br />
              맞춤 레터를 선보입니다. 챗 GPT API를 활용하여 업무 및<br />
              글쓰기를 효과적으로 도와요.
            </CenterSecondText>
          </TextColumn>
          <WidthBox width="140rem" />
          <Imgbox src={MainLogo} alt=""></Imgbox>
        </CenterContents>
        <HeightBox height="98rem" />
        <ButtonWrapper>
          <Button onClick={ButtonHandler}>
            <ButtonText>고민 걱정 없이, 시작하기</ButtonText>
          </Button>
        </ButtonWrapper>
      </CenterWrapper>
      <HeightBox height="130rem" />
      <DescWrapper>
        <DescFirstTextWrapper>
          <UmmIMG src={ummImage} alt="" />
          <DescFirstText>서비스는</DescFirstText>
          <DescFirstText>어떻게 진행되나요?</DescFirstText>
        </DescFirstTextWrapper>
        <DescRightWrapper>
          <DescRightColumn>
            <DescRightFirstText>
              핵심만 콕 짚은 <br />
              3가지 질문
            </DescRightFirstText>
            <DescRightSecondText>
              나와 상대방, 상황을 <br />
              인식해요
            </DescRightSecondText>
          </DescRightColumn>
          <DescRightColumn>
            <DescRightFirstText>
              대화를 통한
              <br />
              나의 맞춤 글쓰기
            </DescRightFirstText>
            <DescRightSecondText>
              내가 원하는 답변을
              <br />
              얻을 수 있어요
            </DescRightSecondText>
          </DescRightColumn>
          <DescRightColumn>
            <DescRightFirstText>
              정확하고 꼼꼼한
              <br />
              인공지능 답변
            </DescRightFirstText>
            <DescRightSecondText>
              챗 GPT를 기반으로 한<br />
              풍부한 글쓰기
            </DescRightSecondText>
          </DescRightColumn>
        </DescRightWrapper>
      </DescWrapper>
      <SecondDescWrapper>
        <HeightBox height="140rem" />
        <SecondDescTopText>
          복잡한 대화를 하고 있나요?
          <br />
          <TopBlueText>총 3번</TopBlueText>, 뚜렷한 목적만 묻고 답하여
          <br />
          <TopOrangeText>쉽게</TopOrangeText> 대화해요.
        </SecondDescTopText>
        <HeightBox height="165rem" />
        <FirstIMG src={SecondDescIMG1} alt="" />
        <SecondIMG src={SecondDescIMG2} alt="" />
      </SecondDescWrapper>
      <HeightBox height="83rem" />
      <AdBlock />
      <HeightBox height="88rem" />
      <FooterWrapper>
        <FooterImg src={FooterLogo} alt="" />
        <FooterTextWrapper>
          <ContactText>
            Product Manager : 박혜연
            <br />
            abc1004829@gmail.com
          </ContactText>
          <ContactText>
            Designer: 조유나
            <br />
            yjo51185@gmail.com
          </ContactText>
          <ContactText>
            FE developer : 김재연
            <GithubIMG
              src={githubimg}
              alt=""
              onClick={() => GithubHandler("https://github.com/JLake310")}
            />
            <br />
            0310kjy@gmail.com
          </ContactText>
          <ContactText>
            BE developer : 이채민
            <GithubIMG
              src={githubimg}
              alt=""
              onClick={() => GithubHandler("https://github.com/CokeLee777")}
            />
            <br />
            akak640@gmail.com
          </ContactText>
        </FooterTextWrapper>
      </FooterWrapper>
      <HeightBox height="20rem" />
      <CopyrightBox>
        Copyright © umm... All Rights Reserved. Prod By. MOKY4
      </CopyrightBox>
      <HeightBox height="80rem" />
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
  margin-left: 40rem;
`;

const TextColumn = styled.div`
  width: 433rem;
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
  width: 433rem;
  height: 168rem;
`;

const CenterSecondText = styled.span`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 20rem;
  line-height: 150%;
  /* or 30rem */

  letter-spacing: -0.022em;
  color: #424242;
`;

const Imgbox = styled.img`
  width: 531rem;
  height: 199.46rem;
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
  padding: 20rem 10rem;
  gap: 10rem;

  width: 540rem;
  height: 75rem;

  border: solid 1rem #3a79e3;
  background: #3a79e3;
  border-radius: 20rem;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 25rem;
  line-height: 35rem;
  /* identical to box height, or 140% */

  text-align: center;

  color: #ffffff;
`;

const DescWrapper = styled.div`
  width: 1051rem;
  height: 140rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 130rem;
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
  height: 140rem;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
`;

const DescRightFirstText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 20rem;
  line-height: 30rem;
  text-align: center;

  color: #424242;
  width: 140rem;
  margin-bottom: 30rem;
`;
const DescRightSecondText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 25rem;
  text-align: center;

  color: #8c8c8c;
  width: 153rem;
`;

const UmmIMG = styled.img`
  width: 97rem;
  height: 24rem;
  transform: translate(-5%, 20%);
`;

const DescFirstTextWrapper = styled.div`
  width: 191rem;
  height: 70rem;
`;

const SecondDescWrapper = styled.div`
  height: 1535rem;
  background: #e7f5ff;
`;

const SecondDescTopText = styled.span`
  width: 534rem;
  height: 168rem;

  /* TITLE 01 */

  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 40rem;
  line-height: 56rem;
  /* or 140% */

  text-align: center;

  color: #424242;
  margin-top: 140rem;
`;

const TopBlueText = styled.span`
  color: #3a79e3;
`;
const TopOrangeText = styled.span`
  color: #ff983b;
`;

const FirstIMG = styled.img`
  position: absolute;
  width: 840rem;
  height: 560rem;
  top: 1683rem;
  left: 249rem;
`;
const SecondIMG = styled.img`
  position: absolute;
  width: 420rem;
  height: 500rem;
  top: 2105rem;
  right: 251rem;
`;

const AdBlock = styled.div`
  width: 1055rem;
  height: 89rem;
  // background: black;
  margin: 0 auto;
`;

const FooterWrapper = styled.div`
  width: 1680rem;
  height: 77rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const FooterImg = styled.img`
  width: 181rem;
  height: 77rem;
`;

const FooterTextWrapper = styled.div`
  width: 812rem;
  height: 64rem;
  display: flex;
  justify-content: space-between;
`;
const ContactText = styled.span`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 32rem;
  text-align: left;
  /* or 188% */

  /* GRAY 03 */

  color: #424242;
`;

const CopyrightBox = styled.div`
  width: 1680rem;
  text-align: right;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 32rem;
  /* identical to box height, or 200% */

  /* GRAY 03 */

  color: #424242;
  margin: 0 auto;
`;

const GithubIMG = styled.img`
  width: 22rem;
  height: 22rem;
  transform: translate(20%, 20%);
  cursor: pointer;
`;

const MobileWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

const MobileModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 330px;
  height: 330px;
  margin: 0 auto;
  /* GRAY 00 */
  // margin-top: 20vh;
  background: #ffffff;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

const MobileIMG = styled.img`
  width: 133.47px;
  height: 110px;
  margin: 0 auto;
`;

const MobileText = styled.span`
  margin: 0 auto;
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height, or 144% */

  text-align: center;

  /* GRAY 03 */

  color: #424242;
`;
