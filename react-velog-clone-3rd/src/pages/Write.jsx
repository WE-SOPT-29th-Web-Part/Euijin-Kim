import React, { useEffect, useState } from "react";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTags from "../components/write/ArticleTags";
import ArticleTitle from "../components/write/ArticleTitle";
import { client } from "../libs/api";

const Write = () => {
  // 기본적으로 필요한 데이터를 입력과 동시에 받아오고(state로 관리한다), 출간하기를 누르면 axios.post를 시킨다.
  const [articleData, setArticleData] = useState({
    id: "", // articleData.length+1해주면 됨.
    title: "",
    body: "",
    summary: "", //
    series: "",
    tags: [],
    thumbnail: "", // -> 사진 올리기 - 다음시간에
    date: "", // - 오늘날짜를 찍어주면 됨
  });

  useEffect(() => {
    console.log(`articleData`, articleData);
  }, [articleData]);
  //   이 작업을 모든 key에 대해서 실시해줄 것입니다.
  const createArticle = async () => {
    const { data } = await client.get("/article");
    const id = data.length + 1;
    const now = new Date();
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;

    await client.post("/article", {
      ...articleData,
      id,
      date,
      summary: "요약입니다.",
    });
  };
  const handlePost = async () => {
    await createArticle();
  };

  return (
    <div>
      <button onClick={handlePost}>POST!</button>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags
        tags={articleData.tags}
        articleData={articleData}
        setArticleData={setArticleData}
      />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter />
    </div>
  );
};

export default Write;
