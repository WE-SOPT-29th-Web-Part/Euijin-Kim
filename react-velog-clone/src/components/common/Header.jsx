import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ArrowDropDownImage } from "../../assets/icons/arrow_drop_down.svg";
import { colors } from "../../libs/constants/colors";
import { useHistory } from "react-router";
import img from "../../assets/images/sopt_web.png";

const Header = () => {
  const history = useHistory();

  return (
    <Styled.Root>
      <Styled.Left onClick={() => history.push("/")}>
        <div></div>
        <span>sopt.log</span>
      </Styled.Left>
      <Styled.Right>
        <SearchIcon />
        <Link to="/write">
          <button>새 글 작성</button>
        </Link>
        <Styled.Thumbnail>
          <img src={img} alt="profile" />
          <ArrowDropDownImage fill="darkgray" />
        </Styled.Thumbnail>
      </Styled.Right>
    </Styled.Root>
  );
};

export default Header;

const Styled = {
  Root: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: auto;
    height: 64px;
  `,
  Left: styled.div`
    font-size: 21px;
    font-weight: bold;
    cursor: pointer;
  `,
  Right: styled.div`
    display: flex;
    align-items: center;
    & > svg {
      height: 20px;
      width: 100%;
      margin-right: 12px;
      cursor: pointer;
    }

    button {
      width: 97px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 16px;
      border: 1px solid rgb(52, 58, 64);
      background-color: white;
      margin-right: 20px;
      transition: background-color 300ms ease;
      cursor: pointer;
      color: ${colors.darkBlack};
      font-size: 16px;
      font-weight: bold;
      &:hover {
        background-color: rgb(52, 58, 64);
        color: #e8eaed;
      }
    }
  `,
  Thumbnail: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    img {
      margin-right: 4px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    &:hover svg {
      fill: black;
    }
  `,
};
