import { IUserInfo } from "App";
import React from "react";
import Card from "./Card";
import PendingResult from "./PendingResult";
import RejectedResult from "./RejectedResult";

interface ResultProps {
  userInfo: IUserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}

const Result = ({ userInfo, setUserInfo }: ResultProps) => {
  switch (userInfo.status) {
    case "pending":
      return <PendingResult />;
    case "resolved":
      return <Card data={userInfo.data} setUserInfo={setUserInfo} />;
    case "rejected":
      return <RejectedResult />;
    case "idle":
    default:
      return <></>;
  }
};

export default Result;
