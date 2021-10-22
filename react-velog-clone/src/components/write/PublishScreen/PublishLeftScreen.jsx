import React from "react";
import styled from "styled-components";

const PublishLeftScreen = () => {
  return (
    <StyledRoot>
      <h3>포스트 미리보기</h3>
      <input type="file" />
      <textarea placeholder="당신의 포스트를 짧게 소개해보세요." />
      <StyledCharacterCounter>000/150</StyledCharacterCounter>
    </StyledRoot>
  );
};

export default PublishLeftScreen;

const StyledRoot = styled.div`
  & > h3 {
    margin-bottom: 8px;
  }
  & > input {
    margin-bottom: 32px;
    display: block;
  }
  & > textarea {
  }
`;

const StyledCharacterCounter = styled.div``;
