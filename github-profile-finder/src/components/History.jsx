import React from "react";
import styled from "styled-components";

const History = ({ getUserInfo, userList, setUserList }) => {
  const handleClick = (user) => {
    getUserInfo(user);
  };

  const handleRemove = (user) => {
    // X 누르면 상태를 바꿔줌으로써 UI를 바꾸고, localStorage를 바꿈으로써 history를 바꿈.
    const newUserList = userList.filter((userId) => userId !== user);
    setUserList(newUserList);
    localStorage.setItem("userList", JSON.stringify(newUserList));
  };

  return (
    <StyledRoot>
      {userList &&
        userList.map((user) => (
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
  background-color: #24272b;
  color: #e5e6e7;
  margin-bottom: 10px;
  position: relative;
  top: -10px;

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
