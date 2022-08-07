import "./App.css";
import NavBar from "../navBar/NavBar";
import { Route } from "react-router-dom";
import Coin from "../coin/Coin";
import CoinChart from "../chart/CoinChart";
import Definitions from "../definitions/Definitions";
import Watchlist from "../watchlist/Watchlist";

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

      <Route exact path="/">
        <>
          {/* <CoinChart /> */}
          {/* <CoinContainer /> */}
          <Definitions />
        </>
      </Route>
    </div>
  );
};

export default App;
