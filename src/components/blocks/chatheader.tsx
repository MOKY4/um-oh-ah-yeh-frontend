import Header from "./header";
import styled from "styled-components";

const ChatHeader = () => {
  return (
    <>
      <Header />
      <HeaderLine />
    </>
  );
};

export default ChatHeader;

const HeaderLine = styled.div`
  height: 0.5rem;
  background: #838383;
`;
