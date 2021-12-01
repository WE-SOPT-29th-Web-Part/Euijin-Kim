import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <StyledLeft>sopt.log</StyledLeft>
      <StyledRight>
        <Link to="/write">
          <button>새 글 작성</button>
        </Link>
      </StyledRight>
    </div>
  );
};

export default Header;

const StyledLeft = styled.div``;

const StyledRight = styled.div``;
