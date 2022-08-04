const fetchCoinPreviousDay = (symbol) => {
  //Polygon fetch
  return fetch(
    `https://api.polygon.io/v2/aggs/ticker/X:${symbol}USD/prev?adjusted=true&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`
  ).then((response) => response.json());
  //POLYGON ALL TICKERS
  //   ("  https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4");
};

const fetchATH = (symbol) => {
  return fetch(
    `https://api.polygon.io/v2/aggs/ticker/X:${symbol}USD/range/1/day/2021-08-04/2022-08-02?adjusted=true&sort=desc&limit=400&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`
    //fake one below
    // `https://api.polygon.io/v2/aggs/ticker/X:ETHUSD/range/1/day/2022-07-29/2022-08-01?adjusted=true&sort=desc&limit=400&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`
  ).then((response) => response.json());
};

export { fetchCoinPreviousDay, fetchATH };
