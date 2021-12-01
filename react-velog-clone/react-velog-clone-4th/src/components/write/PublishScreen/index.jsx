import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../../libs/constants/colors";
import PublishLeftScreen from "./PublishLeftScreen";
import PublishRightScreen from "./PublishRightScreen";

const PublishScreen = ({
  summary,
  onDataChange,
  createArticle,
  isPublishScreen,
  setIsPublishScreen,
}) => {
  const [animate, setAnimate] = useState(false);
  // 컴포넌트가 생길때는 애니메이션이 발생하지 않고, 출간하기와 취소를 누를때만 애니메이션 발생하도록 구현
  useEffect(() => {
    // 초기상태는 animation - false, isPublishScreen - false이기 때문에 null을 return
    // 출간하기를 누르면, isPublishScreen - true, animation - true가 되어서 애니메이션 동작
    let timeoutId = null;
    if (isPublishScreen) {
      // 컴포넌트가 올라온 상태에서는 애니메이션을 킨다.
      setAnimate(true);
    } else if (!isPublishScreen && animate) {
      // 컴포넌트가 내려가고, 애니메이션이 켜져있다면, 125ms뒤에 애니메이션을 끈다.
      timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 125);
    }
    // setTimeout 제거
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isPublishScreen, animate]);
  // 화면이 내려가고, 애니메이션도 켜져있지 않다면 null. 애니메이션 시간 0.125초를 안배한다
  if (!isPublishScreen && !animate) return null;
  return (
    <StyledRoot isPublishScreen={isPublishScreen}>
      <StyledWrapper>
        <PublishLeftScreen onDataChange={onDataChange} summary={summary} />
        <StyledCenterLine />
        <PublishRightScreen
          createArticle={createArticle}
          setIsPublishScreen={setIsPublishScreen}
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
  background-color: ${colors.mainWhite};
  transform: translateY(100%);
  animation: slideUp 250ms forwards ease-in;
  ${({ isPublishScreen }) =>
    isPublishScreen
      ? css`
          animation: slideUp 250ms forwards ease-in;
        `
      : css`
          animation: slideDown 125ms forwards ease-out;
        `}
  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }
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
