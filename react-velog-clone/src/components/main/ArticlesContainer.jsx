import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "../../libs/api";
import { colors } from "../../libs/constants/colors";
import ArticleCard from "./ArticleCard";

const ArticlesContainer = () => {
  const [data, setData] = useState([]);

  const getArticles = async () => {
    const { data } = await client.get("article");
    setData(data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <StyledRoot>
      {data && data.map((item) => <ArticleCard key={item.id} item={item} />)}
    </StyledRoot>
  );
};

export default ArticlesContainer;

const StyledRoot = styled.div`
  & > article + article {
    padding-top: 64px;
    border-top: 1px solid ${colors.lineGray};
  }
`;
