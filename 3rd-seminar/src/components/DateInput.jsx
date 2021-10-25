import React, { useEffect, useState } from "react";

const DateInput = ({ year, month, date, setYear, setMonth, setDate }) => {
  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <div id="dateInput">
      <button>오늘</button>
      <div>
        <input
          type="text"
          value={year}
          onChange={(e) => handleChange(e, setYear)}
        />
        년{" "}
        <input
          type="text"
          value={month}
          onChange={(e) => handleChange(e, setMonth)}
        />
        월
        <input
          type="text"
          value={date}
          onChange={(e) => handleChange(e, setDate)}
        />
        일을 기준으로
      </div>
    </div>
  );
};

export default DateInput;
