import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./Component/TopBar";
import MovieDetails from "./Pages/MovieDetails";
import { useDispatch, useSelector } from "react-redux";
import FavoriteList from "./Pages/FavoriteList";
import { bindActionCreators } from "redux";
import { countAction } from "./Redux/Actions";
export const favList = [];

function App() {
  const state = useSelector((state) => state.count);
  // const dispatch = useDispatch();
  // const { increaseMovie, decreaseMovie } = bindActionCreators(
  //   countAction,
  //   dispatch
  // );

  return (
    <div>
      <Router>
        <Topbar state={state} />
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
            
          />
          <Route path="/movie/details/:id" component={MovieDetails} />
          <Route
            path="/favouritelist"
            component={FavoriteList}
            favList={favList}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
