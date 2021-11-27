import React from "react";

const ArticleTags = ({
  tags,
  articleData,
  onArrDataChange,
  onArrDataRemove,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onArrDataChange("tags", e.target.value);
      e.target.value = "";
    }
  };
  return (
    <div>
      {tags.map((tag) => (
        <span key={tag} onClick={(e) => onArrDataRemove("tags", tag)}>
          {tag}
        </span>
      ))}
      {/* 엔터칠때마다 tag에 추가되도록 */}
      <input type="text" onKeyPress={handleKeyPress} />
    </div>
  );
};

export default ArticleTags;
