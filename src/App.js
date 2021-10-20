import { Route, Switch } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import { useReducer } from "react";
import { FavoritesContext } from "./store/Favorites/context";
import { initialState, favoritesReducer } from "./store/Favorites/reducer";

function App() {
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialState
  );
  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };

  return (
    <div className="App">
      <FavoritesContext.Provider value={favoritesContextValue}>
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
