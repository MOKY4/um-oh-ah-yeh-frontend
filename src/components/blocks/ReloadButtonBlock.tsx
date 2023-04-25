import styled from "styled-components";
import ReloadImage from "@assets/images/reload.png";

const ReloadButton = () => {
  const ReloadHandler = () => {
    window.location.reload();
  };
  return (
    <ReloadWrapper onClick={ReloadHandler}>
      <ReloadImg src={ReloadImage} alt=""></ReloadImg>
      <ReloadText>다시하기</ReloadText>
    </ReloadWrapper>
  );
};

export default ReloadButton;

const ReloadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5rem 10rem;
  gap: 5rem;
  width: 112rem;
  height: 36rem;
  cursor: pointer;
  margin-top: 5rem;
  margin-bottom: -5rem;
  transform: translate(5%, 0);
`;

const ReloadImg = styled.img`
  width: 24rem;
  height: 24rem;
`;

const ReloadText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 17rem;
  line-height: 23rem;
  color: #838383;
`;
