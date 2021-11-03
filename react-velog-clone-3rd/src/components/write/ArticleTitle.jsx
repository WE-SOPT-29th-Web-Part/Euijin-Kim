import React from "react";

const ArticleTitle = ({ setArticleData }) => {
  // textarea의 value가 변화할때, articleData.title을 바꿔줄게.
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData, // id, body, summary, 프러포티를 펼쳐줌, spread연산자
      title: e.target.value, // 펼친 녀석들중 title의 value를 e.target.value로 바꿔줄게
    }));
  };
  return (
    <textarea
      placeholder="제목을 입력하세요."
      onChange={handleChange}
    ></textarea>
  );
};

export default ArticleTitle;
