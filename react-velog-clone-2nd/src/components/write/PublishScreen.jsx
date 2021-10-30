import React from "react";
import styled from "styled-components";
import PublishLeftScreen from "./PublishLeftScreen";
import PublishRightScreen from "./PublishRightScreen";

const PublishScreen = ({
  setIsPublishScreenOpened,
  articleData,
  setArticleData,
  createArticle,
}) => {
  return (
    <StyledRoot>
      <StyledWrapper>
        <PublishLeftScreen
          articleData={articleData}
          setArticleData={setArticleData}
        />
        <PublishRightScreen
          createArticle={createArticle}
          setIsPublishScreenOpened={setIsPublishScreenOpened}
        />
      </StyledWrapper>
    </StyledRoot>
  );
};

export default PublishScreen;

const StyledRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const StyledWrapper = styled.div``;
