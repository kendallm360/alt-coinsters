// import { useEffect, useState } from "react";
// import { fetchCoinPreviousDay } from "../../apiCalls";
// import "./TabSelector.css";
// import Coin from "../coin/Coin";

// const TabSelector = () => {
//   const [ticker, setTicker] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [coin, setCoin] = useState([]);
//   const [symbol, setSymbol] = useState("");
//   // const handlePageView = () => {};

//   const handleSubmit = () => {
//     console.log(ticker);
//     // <Coin ticker={ticker} />;
//     setSubmitted(true);
//     console.log("not working");
//   };

//   const handleTickerSelect = (event) => {
//     // const { name, value } = event.target;
//     setTicker(event.target.value);
//     // fetchCoinPreviousDay(event.target.value).then((data) => {
//     //   setCoin(data.results[0]);
//     //   setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
//     // });
//   };

//   // useEffect(() => {
//   //   fetchCoinPreviousDay(ticker).then((data) => {
//   //     setCoin(data.results[0]);
//   //     setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
//   //   });
//   // }, []);

//   return (
//     <div className="tabs">
//       <select
//         className="tab-selector"
//         value={ticker}
//         name={ticker}
//         onChange={handleTickerSelect}
//       >
//         market-movers-tab
//         <option>--Choose a top 15--</option>
//         <option value={"BTC"}>Bitcoin</option>
//         <option value={"ETH"}>Ethereum</option>
//       </select>
//       <button onClick={handleSubmit}>Try?</button>
//       {/* <button className="tab-selector" onClick={handlePageView()}>
//         top-fifteen-tab
//       </button>
//       <button className="tab-selector" onClick={handlePageView()}>
//         favorites-tab
//       </button> */}
//       {submitted ? <Coin ticker={ticker} /> : "Pick a ticker"}
//       {/* <Coin ticker={ticker} coin={coin} symbol={symbol} /> */}
//     </div>
//   );
// };

// export default TabSelector;
