import React from "react";

const ArticleTags = ({ tags, articleData, setArticleData }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // input에 들어간 내용을 tag로 추가시킬게.
      const tempData = { ...articleData };
      //   불변성 유지
      tempData.tags = [...tempData.tags, e.target.value];

      setArticleData(tempData);
      //   setState는 비동기
      e.target.value = "";
      //   스프레드 연산자를 잘 이해하고 있는가.
    }
  };
  return (
    <div>
      {tags.map((tag) => (
        <span key={tag}>{tag} </span>
      ))}
      {/* 엔터칠때마다 tag에 추가되도록 */}
      <input type="text" onKeyPress={handleKeyPress} />
    </div>
  );
};

export default ArticleTags;
