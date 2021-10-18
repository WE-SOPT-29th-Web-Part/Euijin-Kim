import React from "react";
import styled from "styled-components";
import profileImg from "../../assets/images/sopt_web.png";
import { colors } from "../../libs/constants/colors";

const Profile = () => {
  return (
    <Styled.Root>
      <Styled.Introduce>
        <img src={profileImg} alt="profile" />
        <div>
          <h3>김의진</h3>
          <h4>안녕하세요.</h4>
        </div>
      </Styled.Introduce>
      <Styled.CenterLine></Styled.CenterLine>
      <Styled.Contact></Styled.Contact>
    </Styled.Root>
  );
};

export default Profile;

const Styled = {
  Root: styled.header`
    margin: auto;
    margin-top: 90px;
    width: 768px;
  `,
  Introduce: styled.header`
    display: flex;
    align-items: center;
    img {
      width: 128px;
      height: 128px;
      border-radius: 50%;
      margin-right: 16px;
    }
    div {
      h3 {
        margin: 0;
        margin-bottom: 10px;
        font-size: 24px;
      }
      h4 {
        font-weight: normal;
        margin: 0;
        font-size: 18px;
        color: ${colors.lightGray};
      }
    }
  `,
  CenterLine: styled.header``,
  Contact: styled.header``,
};
