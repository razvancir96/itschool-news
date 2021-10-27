// Importam componentele ce tin de rutare.
import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/category/:categoryId">
            <NewsCategory />
          </Route>
          {/* Atentie! Id-ul unei stiri de la the guardian contine /-uri, deci avem nevoie de * pentru ca parametru newsId sa includa toate /-urile. */}
          <Route path="/news/:newsId*">
            <NewsDetails />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
