import "./App.css";
import Header from "./components/common/Header";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import Result from "./components/Result";

function App() {
  return (
    <StyledRoot>
      <Header />
      <SearchBar />
      <Result />
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
