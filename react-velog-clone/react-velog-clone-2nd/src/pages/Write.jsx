import React, { useEffect, useState } from "react";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTag from "../components/write/ArticleTag";
import ArticleTitle from "../components/write/ArticleTitle";
import { client } from "../libs/api";

const Write = () => {
  // post해보겠다.
  // 여러 input 값을 받아서, 상태로 저장하고, 출간하기 버튼을 누르면 post하면서 게시물이 생성됨.
  //   각각의 상태를 저장한다. id, title, body, summary, tags, thumbnail, date
  const [articleData, setArticleData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "",
    tags: [],
    thumbnail: "",
    date: "",
  });
  useEffect(() => {
    console.log(`articleData`, articleData);
  }, [articleData]);

  const createArticle = async () => {
    const { data } = await client.get("/article");
    const id = data.length + 1;
    const date = new Date();
    const today = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;

    await client.post("/article", {
      ...articleData,
      id: id,
      date: today,
      thumbnail: "",
    });
  };

  return (
    <div>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTag
        tags={articleData.tags}
        articleData={articleData}
        setArticleData={setArticleData}
      />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter
        createArticle={createArticle}
        articleData={articleData}
        setArticleData={setArticleData}
      />
    </div>
  );
};

export default Write;
