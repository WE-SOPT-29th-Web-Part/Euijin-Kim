import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchBar = ({ setUserInfo }) => {
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  // 이 값을 submit 했을 때, 검색이 되도록.
  // input 태그를 form 태그로 감싸고, onSubmit 이벤트를 사용하는 것.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      status: "pending",
    })); // 데이터를 받아오는중입니다 . loading중

    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data, // key와 value가 같을떄
        status: "resolved", // 받아오는 데 성공한 상태
      }));
      console.log(`data`, data);
    } catch (error) {
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data: null, // key와 value가 같을떄
        status: "rejected", // 받아오는 데 성공한 상태
      }));
      console.log(error);
    }

    setUser("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={user}
        onChange={handleChange}
        type="text"
        placeholder="Github 프로필을 검색해보세요."
      />
    </form>
  );
};

export default SearchBar;

const Input = styled.input`
  width: 320px;
  height: 57px;
  padding: 16px;
  color: rgb(229, 230, 231);
  background-color: rgb(36, 39, 43);
  outline: none;
  border: 8px solid rgba(105, 105, 105, 0.5);
  border-radius: 20px;
`;
