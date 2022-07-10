// Importam componentele ce tin de rutare.
import { Route, Routes } from "react-router-dom";
// Importam paginile.
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
// Importam ce tine de state management.
import { useReducer } from "react";
import { FavoritesContext } from "./store/Favorites/context";
import { initialState, favoritesReducer } from "./store/Favorites/reducer";

function App() {
  // Initializam reducerul pentru produse favorite.
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialState
  );
  // Cream obiectul ce va fi pasat ca valoare contextului.
  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };

  return (
    <div className="App">
      {/* Pasam state-ul global si dispatch-ul catre intreaga aplicatie. */}
      <FavoritesContext.Provider value={favoritesContextValue}>
        {/* Rutarea clasica, similara cu ce am facut la sedinta 32. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:categoryId" element={<NewsCategory />} />
          {/* Atentie! Id-ul unei stiri de la the guardian contine /-uri, deci avem nevoie de * pentru ca parametru newsId sa includa toate /-urile. */}
          <Route path="/news/:newsId" element={<NewsDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
