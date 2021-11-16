import React from "react";
import { useLocation } from "react-router";

const Article = () => {
  const location = useLocation();
  const article = location.state;

  return <div></div>;
};

export default Article;
