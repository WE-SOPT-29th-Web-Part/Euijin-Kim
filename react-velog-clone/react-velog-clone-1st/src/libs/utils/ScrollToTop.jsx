import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function ScrollToTop({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return <>{children}</>;
}

export default ScrollToTop;
