import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";

function NewsCategory() {
  const { categoryId } = useParams();

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
