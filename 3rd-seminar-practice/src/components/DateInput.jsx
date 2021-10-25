import React, { useEffect } from "react";

const DateInput = (props) => {
  // console.log(`props`, props);
  // useEffect(() => {
  //   console.log(`year`, props.year);
  //   console.log(`month`, props.month);
  //   console.log(`date`, props.date);
  // }, [props.year, props.month, props.date]);

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <div id="dateInput">
      <button>오늘</button>
      <div>
        <input
          onChange={(e) => handleChange(e, props.setYear)}
          type="text"
          className="dateInput__input"
          value={props.year}
        />
        년
        <input
          onChange={(e) => handleChange(e, props.setMonth)}
          type="text"
          className="dateInput__input"
          value={props.month}
        />
        월
        <input
          onChange={(e) => handleChange(e, props.setDate)}
          type="text"
          className="dateInput__input"
          value={props.date}
        />
        일을 기준으로
      </div>
    </div>
  );
};

export default DateInput;
