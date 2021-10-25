import React, { useState } from "react";

const Text1 = ({ year, month, date }) => {
  const [inputValue, setInputValue] = useState("");
  const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");
  // 어떤것을 상태로 둘래? -> 변화하는 값. - inputValue, resultDate
  // input 값과, year,month,date값을 연산하여 resultDate에 넣어준다.
  const handleChange = (e) => {
    setInputValue(e.target.value);
    printDate(e.target.value);
  };
  const printDate = (value) => {
    const tempDate = new Date();
    tempDate.setFullYear(year);
    // year값을 받아와서 그것을 Date객체로 넣어줌.
    tempDate.setMonth(Number(month) - 1);
    tempDate.setDate(Number(date) + Number(value) - 1);
    // 임시적인 날짜를 만들고, 그 날짜를 가공하여 resultDate에 넣어줄게
    const result = `${tempDate.getFullYear()}년 ${
      tempDate.getMonth() + 1
    }월 ${tempDate.getDate()}일`;
    setResultDate(result);
  };
  // 1. 오늘 버튼 구현
  // 2. D-day 계산 구현

  return (
    <div className="text">
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        일째 되는 날은?
      </div>
      <div>{resultDate}</div>
    </div>
  );
};

export default Text1;
