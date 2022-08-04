const assignName = (ticker) => {
  if (ticker === "ETH") {
    return "Ethereum";
  }
  if (ticker === "BTC") {
    return "Bitcoin";
  }
  if (ticker === "USDT") {
    return "Tether";
  }
  if (ticker === "USDC") {
    return "USD Coin";
  }
  if (ticker === "XRP") {
    return "Ripple";
  }
  if (ticker === "ADA") {
    return "Cardano";
  }
  if (ticker === "UNI") {
    return "Uniswap";
  }
  if (ticker === "XLM") {
    return "Stellar";
  }
  if (ticker === "SOL") {
    return "Solana";
  }
  if (ticker === "GRT") {
    return "Graph";
  }
  if (ticker === "DOGE") {
    return "DogeCoin";
  }
  if (ticker === "DOT") {
    return "PolkaDot";
  }
  if (ticker === "LINK") {
    return "ChainLink";
  }
  if (ticker === "MATIC") {
    return "Polygon";
  }
  if (ticker === "XTZ") {
    return "Tezos";
  }
  if (ticker === "ATOM") {
    return "Cosmos";
  }
  if (ticker === "THETA") {
    return "Theta Network";
  }
  if (ticker === "XMR") {
    return "Monero";
  }
  if (ticker === "CHZ") {
    return "Chiliz";
  }
  if (ticker === "SHIB") {
    return "Shiba Inu";
  }
};

export { assignName };
