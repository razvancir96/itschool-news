import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";

function NewsDetails() {
  const { newsId } = useParams();

  return (
    <Layout>
      <Container>
        <h1>Titlul știrii</h1>
        <p>Parametrul venit din rută: {newsId}</p>
      </Container>
    </Layout>
  );
}

export default NewsDetails;
