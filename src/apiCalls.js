const fetchCoinPreviousDay = (symbol) => {
  //Polygon fetch
  return fetch(
    `https://api.polygon.io/v2/aggs/ticker/X:${symbol}USD/prev?adjusted=true&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`
  ).then((response) => response.json());
  //POLYGON ALL TICKERS
  //   ("  https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4");
};
export { fetchCoinPreviousDay };
