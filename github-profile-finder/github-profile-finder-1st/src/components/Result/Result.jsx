import React from "react";
import Card from "./Card";
import PendingResult from "./PendingResult";
import RejectedResult from "./RejectedResult";

const Result = ({ userInfo, setUserInfo }) => {
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
