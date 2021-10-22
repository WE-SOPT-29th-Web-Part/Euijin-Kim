import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const PublishRightScreen = ({ createArticle }) => {
  const history = useHistory();
  const handlePost = async () => {
    // await 안 해주면, 비동기 처리되지 않아 곧바로 get 반영되지 않는다.
    await createArticle();
    history.push("/");
  };
  return (
    <StyledRoot>
      <button onClick={handlePost}>출간하기</button>
    </StyledRoot>
  );
};

export default PublishRightScreen;

const StyledRoot = styled.section`
  width: 100%;
`;
