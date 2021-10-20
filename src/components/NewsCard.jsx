import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function NewsCard(props) {
  const { newsId, imgSrc, title, description } = props;

  return (
    <Link to={`/news/${newsId}`}>
      <Card className="h-100">
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default NewsCard;
