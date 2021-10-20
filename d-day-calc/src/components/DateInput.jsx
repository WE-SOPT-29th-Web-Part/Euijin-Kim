import React from "react";
import "../index.css";

const DateInput = ({ year, month, date, setYear, setMonth, setDate }) => {
  const now = new Date();
  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const makeDateToday = () => {
    setYear("");
    setMonth("");
    setDate("");
  };

  return (
    <div className="date-input__container">
      <button onClick={makeDateToday}>오늘</button>
      <div className="date-input__from">
        <input
          type="text"
          className="date-input date-input__year"
          onChange={(e) => handleChange(e, setYear)}
          value={year || now.getFullYear()}
        />
        년
        <input
          type="text"
          className="date-input date-input__month"
          onChange={(e) => handleChange(e, setMonth)}
          value={month || now.getMonth() + 1}
        />
        월
        <input
          type="text"
          className="date-input date-input__day"
          onChange={(e) => handleChange(e, setDate)}
          value={date || now.getDate()}
        />
        일을 기준으로
      </div>
    </div>
  );
};

export default DateInput;
