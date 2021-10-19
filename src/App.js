import { Route, Switch } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <div className="App">
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
        <Route path="/news/:newsId">
          <NewsDetails />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
