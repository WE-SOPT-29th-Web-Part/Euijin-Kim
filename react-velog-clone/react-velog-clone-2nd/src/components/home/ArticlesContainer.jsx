import React, { useEffect, useState } from "react";
import { client } from "../../libs/api";
import ArticleCard from "./ArticleCard";

const ArticlesContainer = () => {
  // const getArticle = async () => {
  //   const { data } = await client.get("article");
  //   console.log(`data`, data);
  // };
  const [data, setData] = useState([]);

  const getArticle = async () => {
    const { data } = await client.get("article");
    setData(data);
  };
  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div>
      {data &&
        data.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
    </div>
  );
};

export default ArticlesContainer;
