import React from "react";

const Text2 = ({ year, month, date }) => {
  return (
    <div className="text">
      <div className="text__left">
        D-
        <input type="text" />
        는?
      </div>
      <div>yyyy년 mm월 dd일</div>
    </div>
  );
};

export default Text2;
