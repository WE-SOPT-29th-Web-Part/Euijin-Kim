import React from "react";
import styled from "styled-components";

const Result = ({ userInfo }) => {
  const {
    avatar_url,
    name,
    login,
    bio,
    html_url,
    followers,
    following,
    public_repos,
  } = userInfo;

  return userInfo.name ? (
    <StyledRoot>
      <img src={avatar_url} alt="" />
      <h3>{name}</h3>
      <h4>{login}</h4>
      <p>{bio}</p>
      <a href={html_url} target="_blank" rel="noreferrer">
        Visit Github
      </a>
      <StyledBottom>
        <li>
          <strong>Followers</strong>
          {followers}
        </li>
        <li>
          <strong>Following</strong>
          {following}
        </li>
        <li>
          <strong>Repos</strong>
          {public_repos}
        </li>
      </StyledBottom>
    </StyledRoot>
  ) : (
    <></>
  );
};

export default Result;

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  background-color: #2c3035;
  border-radius: 20px;

  & > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 30px;
  }
  & > h3 {
    margin-top: 24px;
    font-size: 24px;
    font-weight: bold;
  }
  & > h4 {
    margin-top: 5px;
    font-size: 14px;
  }
  & > p {
    padding: 20px 45px;
    text-align: center;
  }
  & > a {
    text-decoration: none;
    color: gold;
    border: 1px solid gold;
    border-radius: 4px;
    padding: 8px;
    &:hover {
      background-color: gold;
      color: black;
    }
  }
`;

const StyledBottom = styled.ul`
  margin-top: 25px;
  display: flex;

  & > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 59px;
    background-color: #24272b;
    border-left: 5px solid #2c3035;
    border-right: 5px solid #2c3035;
    &:nth-child(1) {
      border-left: none;
      border-bottom-left-radius: 20px;
    }
    &:nth-child(3) {
      border-right: none;
      border-bottom-right-radius: 20px;
    }
    & > strong {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;
