import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";

function NewsCategory() {
  const { categoryId } = useParams();
  const newsCategoryEndpoint = getNewsCategoriesEndpoint(categoryId);
  const news = useFetch(newsCategoryEndpoint);

  console.log(news);

  return (
    <Layout>
      <Container>
        <h1>Numele categoriei</h1>
        <p>Parametrul venit din rută: {categoryId}</p>
      </Container>
    </Layout>
  );
}

export default NewsCategory;
