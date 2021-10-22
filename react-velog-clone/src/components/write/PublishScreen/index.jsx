import React from "react";
import styled from "styled-components";
import { colors } from "../../../libs/constants/colors";
import PublishLeftScreen from "./PublishLeftScreen";
import PublishRightScreen from "./PublishRightScreen";

const PublishScreen = ({ summary, handleDataChange, createArticle }) => {
  return (
    <StyledRoot>
      <StyledWrapper>
        <PublishLeftScreen
          handleDataChange={handleDataChange}
          summary={summary}
        />
        <StyledCenterLine />
        <PublishRightScreen createArticle={createArticle} />
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
  background-color: ${colors.mainWhite};
`;

const StyledWrapper = styled.div`
  width: 768px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
`;

const StyledCenterLine = styled.div`
  width: 1px;
  height: 100px;
  margin: 0 32px;
  background-color: ${colors.lightGray};
`;
