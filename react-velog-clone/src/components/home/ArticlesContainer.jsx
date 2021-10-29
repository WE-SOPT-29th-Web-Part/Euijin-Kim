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
    console.log(`data.reverse()`, data.reverse());
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <StyledRoot>
      {data &&
        [...data]
          // 원본 배열을 건드리지 않고 역순으로 하려면 사본을 만든 다음 반대로 만들고 map을 실행하면 된다.
          .reverse()
          .map((item) => <ArticleCard key={item.id} item={item} />)}
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
