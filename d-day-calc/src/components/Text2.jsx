import React, { useEffect, useState } from "react";

const Text2 = ({ year, month, date }) => {
  const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");
  const [inputValue, setInputValue] = useState();
  const handleChange = (e) => {
    if (!e.target.value) {
      setInputValue("");
      setResultDate(`yyyy년 mm월 dd일`);
      return;
    }
    console.log(`e.target.value`, e.target.value);
    setInputValue(e.target.value);
    printDate(e.target.value);
  };
  useEffect(() => {
    printDate(inputValue);
  }, [year, month, date]);

  const printDate = (value) => {
    if (value === undefined) {
      setResultDate(`yyyy년 mm월 dd일`);
      return;
    }
    const tempDate = new Date();
    tempDate.setFullYear(year);
    tempDate.setMonth(Number(month) - 1);
    tempDate.setDate(Number(date) - Number(value));
    setResultDate(
      `${tempDate.getFullYear()}년 ${
        Number(tempDate.getMonth()) + 1
      }월 ${tempDate.getDate()}일`
    );
  };
  return (
    <div className="result__text">
      <div className="left">
        D-
        <input type="text" value={inputValue || ""} onChange={handleChange} />
        는?
      </div>
      <div>{resultDate}</div>
    </div>
  );
};

export default Text2;
