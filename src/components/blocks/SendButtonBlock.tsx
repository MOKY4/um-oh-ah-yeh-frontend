import styled from "styled-components";
import SendLogo from "@assets/images/SendImg.png";
import WidthBox from "./WidthBlock";

interface ISendHandler {
  (): void;
}

interface ButtonProps {
  len: number;
  curDepth: number;
  SendHandler: ISendHandler;
}

interface SendType {
  curDepth: number;
  rescount: number;
}

const SendButton = (props: ButtonProps) => {
  return (
    <SendWrapper
      rescount={props.len}
      curDepth={props.curDepth}
      onClick={props.SendHandler}
    >
      <SendText>보내기</SendText>
      <WidthBox width="10rem" />
      <SendImg src={SendLogo} alt=""></SendImg>
    </SendWrapper>
  );
};

export default SendButton;

const SendWrapper = styled.div<SendType>`
  width: 155rem;
  height: 50rem;
  ${(props) =>
    props.curDepth > 3
      ? props.rescount % 2 === 0
        ? "background: #FF983B;cursor: pointer;"
        : "background: #F0F0F0;"
      : "background: #F0F0F0;"}
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SendText = styled.span`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 23rem;
  text-align: center;
  color: #ffffff;
`;

const SendImg = styled.img`
  width: 13rem;
  height: 13rem;
`;
