import "./App.css";
import Header from "./components/common/Header";
import styled from "styled-components";
import DateInput from "./components/DateInput";
import Result from "./components/Result";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div id="home">
      <div id="home__top">
        <Header />
        <DateInput />
      </div>
      <div id="home__middle-line">D-Day 계산기</div>
      <div className="home__bottom">
        <Result />
        <Footer />
      </div>
    </div>
  );
}

export default App;
