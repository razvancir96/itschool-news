import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsCard from "./NewsCard";

function NewsCardList(props) {
  const { newsList } = props;

  return (
    // Folosim grid-ul bootstrap pentru asezarea in pagina.
    <Container>
      <Row>
        {/* Mapam prin lista de stiri, iar pentru fiecare stire, afisam un card. */}
        {newsList.map((news) => {
          return (
            <Col xs={12} md={6} lg={4} className="mb-4" key={news.id}>
              {/* Atentie la denumirile cheilor din obiectul news si la denumirile prop-urilor lui NewsCard! */}
              <NewsCard
                newsId={news.id}
                imgSrc={news.thumbnail}
                title={news.title}
                description={news.description}
                hasCloseButton={news.hasCloseButton}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default NewsCardList;
