import "./App.css";
import Header from "./components/common/Header";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import Result from "./components/Result";
import { useState } from "react";
import { client } from "./libs/api";

function App() {
  const [userInfo, setUserInfo] = useState();

  const getUserInfo = async (user) => {
    try {
      const { data } = await client.get(`/${user}`);
      console.log(`data`, data);
      setUserInfo(data);
    } catch (e) {
      console.log(`e`, e);
    }
  };

  return (
    <StyledRoot>
      <Header />
      <SearchBar getUserInfo={getUserInfo} />
      <Result userInfo={userInfo} />
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
