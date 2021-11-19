import React, { useEffect } from "react";
import { useHistory } from "react-router";

function ScrollToTop({ children }) {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <>{children}</>;
}

export default ScrollToTop;
