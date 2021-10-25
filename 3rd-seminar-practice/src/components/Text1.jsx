import React, { useEffect, useState } from "react";

const Text1 = ({ year, month, date }) => {
  // 변하는 값을 상태로 받아와야한다. -> input 값
  // 5분간 실습해볼게요.
  // input 의 값을 상태로 받아와서 onChange로 상태를 업데이트 해주는 방법
  // 5시 3분까지 해볼게요
  const [inputValue, setInputValue] = useState("");
  const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");
  console.log(year);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    printDate(e.target.value);
  };

  const printDate = (value) => {
    // year,month,date에다가 value를 더해서 연산을 수행하겠음
    const tempDate = new Date();
    tempDate.setFullYear(year);
    tempDate.setMonth(Number(month) - 1);
    tempDate.setDate(Number(date) + Number(value) - 1);
    const result = `${tempDate.getFullYear()}년 ${
      tempDate.getMonth() + 1
    }월 ${tempDate.getDate()}일`;
    setResultDate(result);
  };
  useEffect(() => {
    printDate(inputValue);
  }, [year, month, date]);
  // 1. 오늘을 눌렀을 때 날짜가 오늘로 바뀌도록
  // 2. d-day 계산
  // 과제로 할게요.

  return (
    <div className="text">
      <div className="text__left">
        <input type="text" value={inputValue} onChange={handleChange} />
        일째 되는 날은?
      </div>
      <div>{resultDate}</div>
    </div>
  );
};

export default Text1;
