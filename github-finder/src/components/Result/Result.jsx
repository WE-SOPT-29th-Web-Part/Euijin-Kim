import React from "react";
import Card from "./Card";
import PendingResult from "./PendingResult";
import RejectedResult from "./RejectedResult";

const Result = ({ userInfo }) => {
  switch (userInfo.status) {
    case "idle":
      return <></>;
    case "pending":
      return <PendingResult />;
    case "resolved":
      return <Card data={userInfo.data} />;
    case "rejected":
      return <RejectedResult />;
    default:
      return <></>;
  }
};

export default Result;
