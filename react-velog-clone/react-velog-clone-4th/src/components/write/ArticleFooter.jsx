import React from "react";
import { useHistory, useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow_left.svg";
import { colors } from "../../libs/constants/colors";

const ArticleFooter = ({ setIsPublishScreen }) => {
  const navigate = useNavigate();
  return (
    <StyledRoot>
      <StyledLeft onClick={() => navigate("/")}>
        <ArrowLeftIcon />
        <span>나가기</span>
      </StyledLeft>
      <StyledRight>
        <StyledButton>임시저장</StyledButton>
        <StyledButton onClick={() => setIsPublishScreen(true)}>
          출간하기
        </StyledButton>
      </StyledRight>
    </StyledRoot>
  );
};

export default ArticleFooter;

const StyledRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  width: 50%;
  height: 64px;
  padding: 0 16px;
`;

const StyledLeft = styled.button`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  background-color: white;

  & > svg {
    margin-right: 8px;
  }
  &:hover {
    background-color: ${colors.lineGray};
  }
`;
const StyledRight = styled.div`
  & > button:nth-child(1) {
    background-color: ${colors.lineGray};
    color: ${colors.lightGray};
    margin-right: 12px;
  }
  & > button:nth-child(2) {
    background-color: ${colors.subGreen};
  }
`;

export const StyledButton = styled.button`
  height: 40px;
  font-size: 18px;
  border-radius: 4px;
  padding: 0 20px;
  color: white;
`;
