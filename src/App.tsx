import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@pages/main";
import Chat from "@pages/chat";
import NotFound from "@pages/notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
