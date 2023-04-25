import styled from "styled-components";
import responseloadinggif from "@assets/images/responsegif.gif";
import HeightBox from "./heightblock";

const ResponseLoading = () => {
  return (
    <LoadingWrapper>
      <HeightBox height="100rem" />
      <Loading src={responseloadinggif} alt="" />
      <HeightBox height="17rem" />
      <LoadingText>
        umm.. 이 열심히 답변을 생성하고 있어요. 조금만 기다려주세요!
      </LoadingText>
      <HeightBox height="100rem" />
    </LoadingWrapper>
  );
};

export default ResponseLoading;

const Loading = styled.img`
  width: 131.22rem;
  height: 60rem;
`;

const LoadingText = styled.span`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 22rem;
  color: #838383;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
