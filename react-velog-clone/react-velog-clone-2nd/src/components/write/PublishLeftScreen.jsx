import React from "react";

const PublishLeftScreen = ({ setArticleData, articleData }) => {
  const handleChange = (e) => {
    setArticleData((currentData) => ({
      ...currentData,
      summary: e.target.value,
    }));
  };
  return (
    <div>
      <h3>포스트 미리보기</h3>
      <input type="file" />
      <textarea value={articleData.summary} onChange={handleChange} />
      <div>0/150</div>
    </div>
  );
};

export default PublishLeftScreen;
