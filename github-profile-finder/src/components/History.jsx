import React from "react";
import styled from "styled-components";

const History = ({ getUserInfo, userList, handleRemove }) => {
  const handleClick = (user) => {
    getUserInfo(user);
  };
  return (
    <StyledRoot>
      {userList.map((user) => (
        <StyledList key={user}>
          <span onClick={() => handleClick(user)}>{user}</span>
          <button onClick={() => handleRemove(user)}>X</button>
        </StyledList>
      ))}
    </StyledRoot>
  );
};

export default History;

const StyledRoot = styled.ul`
  width: 300px;
  /* border-radius: 10px; */
  background-color: #24272b;
  color: #e5e6e7;
  margin-bottom: 10px;

  button {
    border: 0;
    outline: 0;
    background-color: #24272b;
    color: white;
  }
`;

const StyledList = styled.li`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
`;
