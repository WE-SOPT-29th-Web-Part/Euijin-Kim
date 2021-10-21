import React from "react";

const History = ({ userList }) => {
  return (
    <div>
      {userList.map((user) => (
        <>
          <div>{user}</div>
          <button>X</button>
        </>
      ))}
    </div>
  );
};

export default History;
