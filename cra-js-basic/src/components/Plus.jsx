import React from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { countState } from "../states";

const Plus = () => {
  const [count, setCount] = useRecoilState(countState);
  const resetCount = useResetRecoilState(countState);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((pre) => pre + 1)}>+</button>
      <button onClick={() => resetCount()}>Reset</button>
    </>
  );
};

export default Plus;
