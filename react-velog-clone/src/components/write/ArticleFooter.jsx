import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow_left.svg";
import { colors } from "../../libs/constants/colors";

const ArticleFooter = () => {
  return (
    <Styled.Root>
      <Styled.Left>
        <ArrowLeftIcon />
        <span>나가기</span>
      </Styled.Left>
      <Styled.Right>
        <button>임시저장</button>
        <button>출간하기</button>
      </Styled.Right>
    </Styled.Root>
  );
};

export default ArticleFooter;

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
    width: 50%;
    height: 64px;
    padding: 0 16px;
    button {
      height: 40px;
      font-size: 18px;
      border-radius: 4px;
    }
  `,
  Left: styled.button`
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
  `,
  Right: styled.div`
    & > button {
      padding: 0 20px;
    }
    & > button:nth-child(1) {
      background-color: ${colors.lineGray};
      color: ${colors.lightGray};
      margin-right: 12px;
    }
    & > button:nth-child(2) {
      background-color: ${colors.subGreen};
      color: white;
    }
  `,
};
