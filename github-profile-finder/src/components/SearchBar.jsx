import React, { useEffect, useState } from "react";
import styled from "styled-components";
import History from "./History";

const SearchBar = ({ getUserInfo }) => {
  const [user, setUser] = useState();
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getUserInfo(user);
    if (!userList.includes(user)) {
      const newUserList = [...userList, user];
      setUserList(newUserList);
      localStorage.setItem("userList", JSON.stringify(newUserList));
      // localStorage는 모든 데이터를 string으로 변환해버림. 그러므로 JSON 형태로 저장하고(직렬화) 읽어와야(역직렬화) 기본 상태를 유지할 수 있음.
    }
    setUser("");
  };

  useEffect(() => {
    setUserList(JSON.parse(localStorage.getItem("userList")));
  }, []);
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Github 프로필을 검색해보세요."
          onChange={handleChange}
          value={user || ""}
        />
      </StyledForm>
      <History userList={userList} />
    </>
  );
};

export default SearchBar;

const StyledForm = styled.form`
  margin-bottom: 30px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  border-radius: 10px;
  width: 320px;
  height: 57px;
  background-color: #24272b;
  color: #e5e6e7;
  padding: 16px;
`;
