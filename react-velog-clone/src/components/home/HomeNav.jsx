import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const HomeNav = () => {
  const btn1ref = useRef(null);
  const btn2ref = useRef(null);
  const handleClick = (e) => {
    switch (e.target) {
      case btn1ref.current:
        btn1ref.current.classList.add("active");
        btn2ref.current.classList.remove("active");
        break;
      case btn2ref.current:
        btn2ref.current.classList.add("active");
        btn1ref.current.classList.remove("active");
        break;
      default:
        break;
    }
  };
  return (
    <StyledRoot>
      <Link to="/" ref={btn1ref} className="active" onClick={handleClick}>
        글
      </Link>
      <Link to="/series" ref={btn2ref} onClick={handleClick}>
        시리즈
      </Link>
      <StyledBottomLine />
    </StyledRoot>
  );
};

export default HomeNav;

const StyledRoot = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 72px 0;
  position: relative;

  a {
    width: 128px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-size: 21px;
    color: ${colors.lightGray};
    background-color: ${colors.mainWhite};
    border: none;
    padding: 0;
    text-decoration: none;

    &.active {
      color: ${colors.mainGreen};
    }
  }
  a:nth-child(1).active + div {
    transform: translateX(-128px);
  }
  a:nth-child(2).active + div {
    transform: translateX(128px);
  }
`;

const StyledBottomLine = styled.div`
  background-color: ${colors.mainGreen};
  height: 2px;
  width: 128px;
  position: absolute;
  bottom: 0;
  right: 50%;
  transition: transform 250ms ease;
`;
