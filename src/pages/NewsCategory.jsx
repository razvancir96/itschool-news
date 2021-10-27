import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { getNewsList } from "../api/adaptors";
import NewsCardList from "../components/NewsCardList";
import Pagination from "../components/Pagination";

function NewsCategory() {
  // Extragem paramtrul venit din URL.
  const { categoryId } = useParams();
  // Extragem query param-ul page din URL.
  const queryParams = new URLSearchParams(useLocation().search);
  let currentPage = queryParams.get("page");
  // Daca nu avem query param-ul page in url, inseamna ca suntem pe prima pagina.
  if (!currentPage) {
    currentPage = 1;
  }
  // Generam endpoint-ul pentru categoria curenta.
  const newsCategoryEndpoint = getNewsCategoriesEndpoint(
    categoryId,
    currentPage
  );
  // Fetch-uim stirile categoriei.
  const news = useFetch(newsCategoryEndpoint);
  // Adaptam datele venite de la server pentru componentele noastre de react.
  const adaptedNewsList = getNewsList(news);

  // In functie de parametrul primit in url, afisam titlul categoriei.
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
        {/* Afisam lista stirilor. */}
        <NewsCardList newsList={adaptedNewsList} />
        {/* Afisam paginatia. */}
        <Pagination active={currentPage} baseUrl={`/category/${categoryId}`} />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
