import "./App.css";
import NavBar from "../navBar/NavBar";
import { Route, Redirect } from "react-router-dom";
import Coin from "../coin/Coin";
import Definitions from "../definitions/Definitions";
import Watchlist from "../watchlist/Watchlist";
import Error from "../error/Error";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Route
        exact
        path="/coin/:symbol"
        render={({ match }) => {
          return <Coin tickerSymbol={match.params.symbol} />;
        }}
      />

      <Route exact path="/watchlist">
        <Watchlist />
      </Route>

      <Route exact path="/Error">
        <Error />
      </Route>

      <Route exact path="/">
        <Definitions />
      </Route>

      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </div>
  );
};

export default App;
