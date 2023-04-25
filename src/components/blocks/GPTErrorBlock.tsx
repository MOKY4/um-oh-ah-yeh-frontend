import styled from "styled-components";
import gpterror from "@assets/images/gpterror.png";
import HeightBox from "./heightblock";

const GPTError = () => {
  return (
    <GPTErrorWrapper>
      <GPTErrorImg src={gpterror} alt="" />
      <HeightBox height="21rem" />
      <GPTErrorText>접속자 수가 많으니 잠시 후 다시 시도해주세요</GPTErrorText>
    </GPTErrorWrapper>
  );
};

export default GPTError;

const GPTErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const GPTErrorImg = styled.img`
  width: 345rem;
  height: 153rem;
  margin: 0 auto;
`;

const GPTErrorText = styled.span`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 22rem;
  color: #838383;
  margin: 0 auto;
`;
