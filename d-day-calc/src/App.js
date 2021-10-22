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
    <main id="home">
      <section id="home__top">
        <Header />
        <DateInput
          year={year}
          month={month}
          date={date}
          setYear={setYear}
          setMonth={setMonth}
          setDate={setDate}
        />
      </section>
      <div id="home__middle-line">D-Day 계산기</div>
      <section id="home__bottom">
        <Result year={year} month={month} date={date} />
        <Footer />
      </section>
    </main>
  );
}

export default App;
