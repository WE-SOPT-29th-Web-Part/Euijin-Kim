import React, { useEffect, useState } from "react";
import { client } from "../../libs/api";
import ArticleCard from "./ArticleCard";

const ArticlesContainer = () => {
  const [data, setData] = useState([]);

  const getArticles = async () => {
    const { data } = await client.get("article");
    console.log(`data`, data);
    setData(data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      {data && data.map((item) => <ArticleCard key={item.id} item={item} />)}
    </div>
  );
};

export default ArticlesContainer;
