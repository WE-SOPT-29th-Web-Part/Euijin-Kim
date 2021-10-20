import React from "react";
import styled from "styled-components";

const PublishLeftScreen = () => {
  return (
    <Styled.Root>
      <div>포스트 미리보기</div>
      <input type="file" />
      <div>제목</div>
      <textarea placeholder="당신의 포스트를 짧게 소개해보세요." />
      <Styled.CharacterCounter>000/150</Styled.CharacterCounter>
    </Styled.Root>
  );
};

export default PublishLeftScreen;

const Styled = {
  Root: styled.div``,
  CharacterCounter: styled.div``,
};
