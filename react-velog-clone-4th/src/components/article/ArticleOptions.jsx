import React from "react";
import { Navigate, useNavigate } from "react-router";
import { client } from "../../libs/api";

const ArticleOptions = ({ article }) => {
  const navigate = useNavigate();
  const handleArticleDelete = async () => {
    await client.delete(`article/${article.id}`);
    navigate("/");
  };
  const handleNavigateEditPage = () => {
    navigate(`/article/edit/${article.id}`, { state: article });
  };
  return (
    <div>
      <button>통계</button>
      <button onClick={handleNavigateEditPage}>수정</button>
      <button onClick={handleArticleDelete}>삭제</button>
    </div>
  );
};

export default ArticleOptions;
