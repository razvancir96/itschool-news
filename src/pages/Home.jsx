import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <Layout>
      <section className="tech">
        <Container>
          <h1>Tech</h1>
        </Container>
      </section>
      <section className="football">
        <Container>
          <h1>Fotbal</h1>
        </Container>
      </section>
      <section className="favorites">
        <Container>
          <h1>Favorite</h1>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
