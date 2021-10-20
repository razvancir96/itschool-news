import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { getNewsList } from "../api/adaptors";
import NewsCardList from "../components/NewsCardList";

function NewsCategory() {
  const { categoryId } = useParams();
  const newsCategoryEndpoint = getNewsCategoriesEndpoint(categoryId);
  const news = useFetch(newsCategoryEndpoint);
  const adaptedNewsList = getNewsList(news);

  let title = "";
  switch (categoryId) {
    case "technology":
      title = "Tech";
      break;
    case "football":
      title = "Fotbal";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">{title}</h1>
        <NewsCardList newsList={adaptedNewsList} />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
