import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = ({ getUserInfo }) => {
  const [user, setUser] = useState();

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getUserInfo(user);
    setUser("");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Github 프로필을 검색해보세요."
        onChange={handleChange}
        value={user || ""}
      />
    </StyledForm>
  );
};

export default SearchBar;

const StyledForm = styled.form``;

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
