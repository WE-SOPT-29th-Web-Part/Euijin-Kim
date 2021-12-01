import "./App.css";
import Header from "./components/common/Header";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import Result from "./components/Result/Result";
import { useState } from "react";
import { GithubUserResponse } from "types";

export interface IUserInfo {
  status: "idle" | "pending" | "resolved" | "rejected";
  data: GithubUserResponse | null;
}

function App() {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    status: "idle",
    data: null,
  });

  return (
    <StyledRoot>
      <Header />
      <SearchBar setUserInfo={setUserInfo} />
      <Result userInfo={userInfo} setUserInfo={setUserInfo} />
    </StyledRoot>
  );
}

export default App;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #1b1d21;
  color: #e5e6e7;
`;
