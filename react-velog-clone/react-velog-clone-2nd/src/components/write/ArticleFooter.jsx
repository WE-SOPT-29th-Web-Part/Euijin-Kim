import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import PublishScreen from "./PublishScreen";

const ArticleFooter = ({ createArticle, articleData, setArticleData }) => {
  const history = useHistory();
  const [isPublishScreenOpened, setIsPublishScreenOpened] = useState(false);
  return (
    <div>
      <StyledLeft>
        <span onClick={() => history.push("/")}>나가기</span>
      </StyledLeft>
      <StyledRight>
        <button>임시저장</button>
        <button onClick={() => setIsPublishScreenOpened(true)}>출간하기</button>
      </StyledRight>
      {isPublishScreenOpened && (
        <PublishScreen
          articleData={articleData}
          setArticleData={setArticleData}
          createArticle={createArticle}
          setIsPublishScreenOpened={setIsPublishScreenOpened}
        />
      )}
    </div>
  );
};

export default ArticleFooter;

const StyledLeft = styled.div``;
const StyledRight = styled.div``;
