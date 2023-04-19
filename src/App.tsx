import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@pages/main";
import Chat from "@pages/chat";
import NotFound from "@pages/notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader>header</PageHeader>
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
`;
