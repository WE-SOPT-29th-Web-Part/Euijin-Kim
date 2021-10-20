import React, { useEffect } from "react";

const Header = () => {
  console.log(`Header`);
  useEffect(() => {
    console.log(`Header Mount`);
  }, []);
  return <div>Header</div>;
};

export default Header;
