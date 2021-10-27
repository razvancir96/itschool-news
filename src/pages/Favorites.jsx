import { useContext } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { FavoritesContext } from "../store/Favorites/context";
import NewsCardList from "../components/NewsCardList";

function Favorites() {
  // Extragem din state-ul global produsele favorite.
  const { favoritesState } = useContext(FavoritesContext);
  const { products } = favoritesState;
  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">Știrile tale favorite</h1>
        {/* Afisam produsele favorite pe ecran. */}
        {products.length === 0 ? (
          <p>Momentan nu ai nicio știre favorită.</p>
        ) : (
          <NewsCardList newsList={products} />
        )}
      </Container>
    </Layout>
  );
}

export default Favorites;
