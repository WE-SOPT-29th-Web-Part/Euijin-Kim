import React from "react";
import { useHistory } from "react-router";

const PublishRightScreen = ({ createArticle, setIsPublishScreenOpened }) => {
  const history = useHistory();
  const handlePost = async () => {
    await createArticle();
    history.push("/");
  };
  return (
    <div>
      <button onClick={() => setIsPublishScreenOpened(false)}>취소</button>
      <button onClick={handlePost}>출간하기</button>
    </div>
  );
};

export default PublishRightScreen;
