import React from "react";
import PendingResult from "./PendingResult";
import RejectedResult from "./RejectedResult";
import Result from "./Result";

const Result2 = ({ setUserInfo, userInfo }) => {
  // return문에서는 보여줄 것을 정해야한다.
  // idle일때는 아무것도 안보여주고
  // pending일때는 로딩 중임을 보여주고,
  // rejected일때는 "사용자가 없습니다" 이것을 보여주고,
  // resolved card를 보여주자
  switch (userInfo.status) {
    case "pending":
      return <PendingResult />;
    case "resolved":
      return <Result userInfo={userInfo.data} setUserInfo={setUserInfo} />;
    case "rejected":
      return <RejectedResult />;
    case "idle":
    default:
      return <></>;
  }
};

export default Result2;
