import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@pages/main";
import Chat from "@pages/chat";
import NotFound from "@pages/notfound";
import HeaderLogo from "@assets/images/logo.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader>
          <Logo src={HeaderLogo} alt=""></Logo>
        </PageHeader>
        <PageHeaderBack></PageHeaderBack>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/chat/*" element={<Chat />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const PageHeader = styled.div`
  background: white;
  height: 90rem;
  position: fixed;
  width: 100%;
`;
const PageHeaderBack = styled.div`
  background: white;
  height: 90rem;
`;

const Logo = styled.img`
  position: absolute;
  left: 120rem;
  top: 26.37rem;
  width: 150rem;
`;
