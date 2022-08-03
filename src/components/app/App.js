import "./App.css";
import NavBar from "../navBar/NavBar";
import TabSelector from "../tabSelector/TabSelector";
import CoinContainer from "../coinContainer/CoinContainer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <TabSelector />
      {/* <CoinContainer /> */}
    </div>
  );
};

export default App;
