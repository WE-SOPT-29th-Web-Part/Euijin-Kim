import React from "react";
import { useRecoilValue } from "recoil";
import { countState } from "../states";

const Counter = () => {
  const count = useRecoilValue(countState);

  return <div>{count}</div>;
};

export default Counter;
