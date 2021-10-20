import React from "react";
import styled from "styled-components";

const Result = ({ userInfo = {} }) => {
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
        <div>{followers}</div>
        <div>{following}</div>
        <div>{public_repos}</div>
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
`;

const StyledBottom = styled.div`
  margin-top: 25px;
  display: flex;
`;
