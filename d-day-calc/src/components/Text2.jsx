import React, { useRef } from "react";

const Text2 = ({ year, month, date }) => {
  const dateRef = useRef(null);
  const handleChange = (e) => {
    if (!e.target.value) {
      dateRef.current.innerText = `yyyy년 mm월 dd일`;
      return;
    }
    const tempDate = new Date();
    tempDate.setFullYear(year);
    tempDate.setMonth(month);
    tempDate.setDate(date - Number(e.target.value));
    dateRef.current.innerText = `${tempDate.getFullYear()}년 ${tempDate.getMonth()}월 ${tempDate.getDate()}일`;
  };
  return (
    <div className="result__text">
      <input type="text" onChange={handleChange} />
      일째 되는 날은?
      <div ref={dateRef}>yyyy년 mm월 dd일</div>
    </div>
  );
};

export default Text2;
