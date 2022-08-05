import ethereum from "../src/images/ethereum.png";
import bitcoin from "../src/images/bitcoin.png";
import chainlink from "../src/images/chainlink.png";
import chiliz from "../src/images/chiliz.png";
import cosmos from "../src/images/cosmos.png";
import dogecoin from "../src/images/dogecoin.png";
import graph from "../src/images/graph.png";
import monero from "../src/images/monero.png";
import polkadot from "../src/images/polkadot.png";
import polygon from "../src/images/polygon.png";
import shiba from "../src/images/shiba.png";
import solana from "../src/images/solana.png";
import stellar from "../src/images/stellar.png";
import tether from "../src/images/tether.png";
import tezos from "../src/images/tezos.png";
import theta from "../src/images/theta.png";
import uniswap from "../src/images/uniswap.png";
import usdCoin from "../src/images/usdCoin.png";
import xrp from "../src/images/xrp.png";
import cardano from "../src/images/cardano.png";

const tickers = [
  { crypto: "ETHEREUM", ticker: "ETH", description: "", img: ethereum },
  { crypto: "BITCOIN", ticker: "BTC", description: "", img: bitcoin },
  { crypto: "TETHER", ticker: "USDT", description: "", img: tether },
  { crypto: "US DOLLAR COIN", ticker: "USDC", description: "", img: usdCoin },
  { crypto: "RIPPLE", ticker: "XRP", description: "", img: xrp },
  { crypto: "CARDANO", ticker: "ADA", description: "", img: cardano },
  { crypto: "UNISWAP", ticker: "UNI", description: "", img: uniswap },
  { crypto: "STELLAR", ticker: "XLM", description: "", img: stellar },
  { crypto: "SOLANA", ticker: "SOL", description: "", img: solana },
  { crypto: "THE GRAPH", ticker: "GRT", description: "", img: graph },
  { crypto: "DOGECOIN", ticker: "DOGE", description: "", img: dogecoin },
  { crypto: "POLKADOT", ticker: "DOT", description: "", img: polkadot },
  { crypto: "CHAINLINK", ticker: "LINK", description: "", img: chainlink },
  { crypto: "POLYGON", ticker: "MATIC", description: "", img: polygon },
  { crypto: "TEZOS", ticker: "XTZ", description: "", img: tezos },
  { crypto: "COSMOS", ticker: "ATOM", description: "", img: cosmos },
  { crypto: "THETA NETWORK", ticker: "THETA", description: "", img: theta },
  { crypto: "MONERO", ticker: "XMR", description: "", img: monero },
  { crypto: "CHILIZ", ticker: "CHZ", description: "", img: chiliz },
  { crypto: "SHIBA INU", ticker: "SHIB", description: "", img: shiba },
];

const assignData = (data) => {
  let match = tickers.find((coin) => coin.ticker === data);
  return match;
};
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

const btcAnnual = [
  {
    v: 114091.39011238892,
    vw: 23037.6045,
    o: 23291,
    c: 22680.89,
    h: 23650.96,
    l: 22390,
    t: 1659312000000,
    n: 2248534,
  },
  {
    v: 921729.2856252453,
    vw: 21534.991,
    o: 19943,
    c: 23307.44,
    h: 24736,
    l: 18738.6,
    t: 1656633600000,
    n: 16983931,
  },
  {
    v: 1166227.027605708,
    vw: 23294.1375,
    o: 31784.18,
    c: 19985.62,
    h: 31974.1614267,
    l: 17567.45,
    t: 1654041600000,
    n: 24325353,
  },
  {
    v: 1044092.1513156558,
    vw: 31637.5491,
    o: 37659,
    c: 31784.05,
    h: 40046,
    l: 26591,
    t: 1651363200000,
    n: 24788169,
  },
  {
    v: 526144.0588176962,
    vw: 41402.4021,
    o: 45525.25,
    c: 37644.09,
    h: 47600,
    l: 37590,
    t: 1648771200000,
    n: 18095422,
  },
  {
    v: 765072.1071717049,
    vw: 41908.588,
    o: 43189.48,
    c: 45528.22,
    h: 48240,
    l: 37159.4,
    t: 1646092800000,
    n: 21101968,
  },
  {
    v: 756093.3229729664,
    vw: 40239.3973,
    o: 38492.53,
    c: 43192.66,
    h: 45900,
    l: 34322,
    t: 1643673600000,
    n: 18299728,
  },
  {
    v: 927546.4663190752,
    vw: 39984.0534,
    o: 46211.24,
    c: 38491.33,
    h: 48012,
    l: 32933.33,
    t: 1640995200000,
    n: 20246358,
  },
  {
    v: 847433.3655669434,
    vw: 49254.9555,
    o: 56998.35,
    c: 46211.24,
    h: 59118.84,
    l: 40150.1,
    t: 1638316800000,
    n: 19263101,
  },
  {
    v: 732874.3563844925,
    vw: 60398.4902,
    o: 61346.17,
    c: 56987.97,
    h: 69000,
    l: 53300,
    t: 1635724800000,
    n: 20070803,
  },
  {
    v: 810401.7263062645,
    vw: 57872.6384,
    o: 43828.89,
    c: 61343.69,
    h: 67016.5,
    l: 43287.44,
    t: 1633046400000,
    n: 19541569,
  },
  {
    v: 753096.2013495859,
    vw: 45568.5245,
    o: 47110.33,
    c: 43770.97,
    h: 52956.47,
    l: 39573.21,
    t: 1630454400000,
    n: 15019392,
  },
  {
    v: 744563.5248200845,
    vw: 44930.9875,
    o: 41489.16,
    c: 47112.5,
    h: 50562.11,
    l: 37300,
    t: 1627776000000,
    n: 14090496,
  },
];

export { assignName, btcAnnual, tickers, assignData };
