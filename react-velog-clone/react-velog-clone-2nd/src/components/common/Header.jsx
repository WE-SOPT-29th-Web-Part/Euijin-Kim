import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <StyledLeft>sopt.log</StyledLeft>
      <StyledRight>
        <Link to="write">
          <button>μ κΈ μμ±</button>
        </Link>
      </StyledRight>
    </div>
  );
};

export default Header;

const StyledLeft = styled.div``;
const StyledRight = styled.div``;
