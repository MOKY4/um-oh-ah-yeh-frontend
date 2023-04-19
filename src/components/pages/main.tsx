import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <Link to="/chat">시작하기</Link>
    </>
  );
};

export default Main;
