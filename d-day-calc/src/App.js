import "./App.css";
import Header from "./components/common/Header";
import styled from "styled-components";
import DateInput from "./components/DateInput";
import Result from "./components/Result";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
      <div id="home__top">
        <Header />
        <DateInput />
      </div>
      <div id="home__middle-line"></div>
      <div className="home__bottom">
        <Result />
        <Footer />
      </div>
    </div>
  );
}

export default App;
