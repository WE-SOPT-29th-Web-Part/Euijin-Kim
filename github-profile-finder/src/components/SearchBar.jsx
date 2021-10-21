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
    // submit시 새로고침 되는 현상 방지
    e.preventDefault();
    // user API 받아오기
    getUserInfo(user);
    // 중복체크
    if (!userList.includes(user)) {
      const newUserList = [...userList, user];
      // 상태를 변화시켜줌으로써, 화면에 History가 보여지도록 함.
      setUserList(newUserList);
      // localStorage에 저장하여, 사이트를 껐다가 다시 들어와도 history가 저장되도록 함.
      localStorage.setItem("userList", JSON.stringify(newUserList));
      // localStorage는 모든 데이터를 string으로 변환해버림. 그러므로 JSON 형태로 저장하고(직렬화) 읽어와야(역직렬화) 기본 상태를 유지할 수 있음.
    }
    setUser("");
  };

  useEffect(() => {
    // 컴포넌트가 mount되었을 때, localStorage 정보를 가지고 옴.
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
      <History
        getUserInfo={getUserInfo}
        userList={userList}
        setUserList={setUserList}
      />
    </>
  );
};

export default SearchBar;

const StyledForm = styled.form`
  /* margin-bottom: 10px; */
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
