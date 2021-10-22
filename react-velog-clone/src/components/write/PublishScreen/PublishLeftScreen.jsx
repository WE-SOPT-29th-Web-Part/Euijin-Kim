import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../libs/constants/colors";

const PublishLeftScreen = () => {
  const [description, setDescription] = useState("");
  const MAX_NUM = 150;

  const handleChange = (e) => {
    const value = e.target.value;
    const length = value.length;
    if (length > MAX_NUM) {
      return;
    }
    setDescription(e.target.value);
  };
  return (
    <StyledRoot>
      <h3>포스트 미리보기</h3>
      <input type="file" />
      <textarea
        placeholder="당신의 포스트를 짧게 소개해보세요."
        value={description}
        onChange={handleChange}
      />
      <StyledCharacterCounter limit={description.length === 150}>
        {description.length || "0"}/150
      </StyledCharacterCounter>
    </StyledRoot>
  );
};

export default PublishLeftScreen;

const StyledRoot = styled.div`
  width: 100%;
  & > h3 {
    margin-bottom: 8px;
    font-size: 21px;
    font-weight: bold;
  }
  & > input {
    margin-bottom: 32px;
    display: block;
  }
  & > textarea {
    width: 100%;
    height: 118px;
    resize: none;
    padding: 12px 16px;
  }
`;

const StyledCharacterCounter = styled.div`
  text-align: right;
  font-size: 12px;
  margin-top: 4px;
  /* color: ${colors.dateGray}; */
  color: ${({ limit }) => (limit ? "red" : colors.dateGray)};
`;
