import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@pages/MainPage";
import Chat from "@pages/ChatPage";
import NotFound from "@pages/NotFoundPage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/chat/*" element={<Chat />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
