import React from "react";

const History = ({ userList, handleRemove }) => {
  return userList.map((user) => (
    <div key={user}>
      <div>{user}</div>
      <button onClick={() => handleRemove(user)}>X</button>
    </div>
  ));
};

export default History;
