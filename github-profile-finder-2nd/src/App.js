import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import Result2 from "./components/Result2";

function App() {
  const [userInfo, setUserInfo] = useState({ data: null, status: "idle" });
  // api 통신 상태에 따른, 분기처리
  // userInfo - 유저의 정보를 받아옴.
  // idle - 아무 데이터도 받아오지 않은 상태
  return (
    <Root>
      <Header />
      <SearchBar setUserInfo={setUserInfo} />
      <Result2 userInfo={userInfo} setUserInfo={setUserInfo} />
    </Root>
  );
}

export default App;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
