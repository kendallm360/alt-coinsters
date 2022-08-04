const fetchCoinPreviousDay = (symbol) => {
  return fetch(
    `https://api.polygon.io/v2/aggs/ticker/X:${symbol}USD/prev?adjusted=true&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`
  ).then((response) => response.json());
};

const fetchAnnuals = (symbol) => {
  return fetch(
    `https://api.polygon.io/v2/aggs/ticker/X:${symbol}USD/range/1/day/2021-08-04/2022-08-02?adjusted=true&sort=desc&limit=400&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`
  ).then((response) => response.json());
};

const fetchThirty = (symbol) => {
  return fetch(
    `https://api.polygon.io/v2/aggs/ticker/X:${symbol}USD/range/1/day/2022-07-01/2022-08-03?adjusted=true&sort=desc&limit=400&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`
  ).then((response) => response.json());
};
export { fetchCoinPreviousDay, fetchAnnuals, fetchThirty };
