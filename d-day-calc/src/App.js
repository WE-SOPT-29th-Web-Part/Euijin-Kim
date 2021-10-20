import "./App.css";
import Header from "./components/common/Header";
import DateInput from "./components/DateInput";
import Result from "./components/Result";
import Footer from "./components/common/Footer";
import { useState } from "react";

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());

  return (
    <div id="home">
      <div id="home__top">
        <Header />
        <DateInput
          year={year}
          month={month}
          date={date}
          setYear={setYear}
          setMonth={setMonth}
          setDate={setDate}
        />
      </div>
      <div id="home__middle-line">D-Day 계산기</div>
      <div className="home__bottom">
        <Result year={year} month={month} date={date} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
