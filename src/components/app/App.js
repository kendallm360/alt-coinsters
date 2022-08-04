import "./App.css";
import NavBar from "../navBar/NavBar";
import TabSelector from "../tabSelector/TabSelector";
import CoinContainer from "../coinContainer/CoinContainer";
import { Route } from "react-router-dom";
import Coin from "../coin/Coin";
import CoinChart from "../chart/CoinChart";

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

      <Route exact path="/">
        <>
          {/* <CoinChart /> */}
          {/* <TabSelector /> */}
          <CoinContainer />
        </>
      </Route>
    </div>
  );
};

export default App;
