import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "../../libs/api";
import { colors } from "../../libs/constants/colors";
import ArticleCard from "./ArticleCard";

const ArticlesContainer = () => {
  const [data, setData] = useState([]);

  // const getArticle = async () => {
  //   const { data } = await client.get("article");
  //   setData(data);
  // };
  // 이렇게 선언하여 useEffect 속에서 사용해도 무방하지만, 조금의 문제가 있을 수 있다.

  useEffect(() => {
    // getArticle();
    // getArticle 이와 같이 표현하면, setData는 잘 받아올 수 있으나, 여전히 getArticle은 비동기 함수이기 때문에,
    // getArticle을 실행하고 Web API로 보낸 후, 이후 코드를 비동기적으로 실행한다.
    // 즉, 이번 경우는 이후 코드에서 data를 만져주는 코드가 없기 떄문에 문제가 없지만, 이후에 data를 만져주는 과정이 있다면 좋지 않은 코드가 될 것이다
    // 그러므로 useEffect 내에서 async await를 선언해준다. 이를 IIFE (Immediately Invoked Function Expression)라고 한다.
    // useEffect의 콜백함수를 async await로 감싸면 문제가 생긴다.
    // async 함수는 return 값으로 프로미스를 반환하는데, useEffect의 콜백함수로는 clean-up function(componeneWillUnmount)에 해당하는 코드가 와야한다.
    // 그러므로, 충돌이 생겨 에러가 난다.
    (async () => {
      const { data } = await client.get("article");
      setData(data);
    })();
  }, []);

  return (
    <StyledRoot>
      {data &&
        [...data]
          // 원본 배열을 건드리지 않고 역순으로 하려면 사본을 만든 다음 반대로 만들고 map을 실행하면 된다.
          .reverse()
          .map((article) => <ArticleCard key={article.id} article={article} />)}
    </StyledRoot>
  );
};

export default ArticlesContainer;

const StyledRoot = styled.div`
  & > article + article {
    padding-top: 64px;
    border-top: 1px solid ${colors.lineGray};
  }
`;
