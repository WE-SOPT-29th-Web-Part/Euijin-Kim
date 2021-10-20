import React from "react";
import styled from "styled-components";

const Header = () => {
  return <StyledTitle>GitHub Profile Finder</StyledTitle>;
};

export default Header;

const StyledTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;
