import React from "react";
import styled from "styled-components";
import { colors } from "../../../libs/constants/colors";
import PublishLeftScreen from "./PublishLeftScreen";
import PublishRightScreen from "./PublishRightScreen";

const PublishScreen = () => {
  return (
    <Styled.Root>
      <PublishLeftScreen />
      <PublishRightScreen />
    </Styled.Root>
  );
};

export default PublishScreen;

const Styled = {
  Root: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.mainWhite};
  `,
};
