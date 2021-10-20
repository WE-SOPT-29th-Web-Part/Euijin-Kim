import React from "react";
import "../index.css";

const DateInput = () => {
  return (
    <div className="date-input__container">
      <button>오늘</button>
      <div className="date-input__from">
        <input type="text" className="date-input date-input__year" />년
        <input type="text" className="date-input date-input__month" />월
        <input type="text" className="date-input date-input__day" />
        일을 기준으로
      </div>
    </div>
  );
};

export default DateInput;
