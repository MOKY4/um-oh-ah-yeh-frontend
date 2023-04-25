import styled from "styled-components";
import gptloading from "@assets/images/gptloading.gif";
import gptloadingalt from "@assets/images/gptloadingalt.png";

const GPTLoading = () => {
  return (
    <GPTLoadingWrapper>
      <GPTLoadingImg src={gptloading} alt={gptloadingalt} />
      <GPTLoadingText>로딩 중이에요... 잠시만 기다려주세요!</GPTLoadingText>
    </GPTLoadingWrapper>
  );
};
export default GPTLoading;

const GPTLoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const GPTLoadingImg = styled.img`
  width: 400rem;
  height: 377.36rem;
  margin: 0 auto;
`;

const GPTLoadingText = styled.span`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 22rem;
  color: #838383;
  margin: 0 auto;
`;
