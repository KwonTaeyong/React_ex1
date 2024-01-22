import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
// pages
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
      <BrowserRouter>
        <MainTitleText>미니블로그</MainTitleText>
        <Routes>
          <Route index element={<MainPage />}></Route>
          <Route path="post/:postId" element={<PostViewPage />}></Route>
          <Route path="post-write" element={<PostWritePage />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;