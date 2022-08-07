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

const favorites = [];

const assignDecimalPlaces = (value) => {
  if (value > 1) {
    return value.toFixed(2);
  }
  if (value < 0.1) {
    return value.toFixed(3);
  }
  if (value < 1 && value > 0.1) {
    return value.toFixed(2);
  }
};

const tickers = [
  {
    crypto: "ETHEREUM",
    ticker: "ETH",
    description:
      "Ethereum is the second-biggest cryptocurrency by market cap after Bitcoin. It is also a decentralized computing platform that can run a wide variety of applications — including a universe of decentralized finance (or DeFi) apps and services. Everything from financial tools and games to complex databases are already running on the Ethereum blockchain. And its future potential is only limited by developers imaginations. As the nonprofit Ethereum Foundation puts it: Ethereum is for more than payments. Its a marketplace of financial services, games and apps that cant steal your data or censor you",
    img: ethereum,
  },
  {
    crypto: "BITCOIN",
    ticker: "BTC",
    description:
      "Bitcoin was created by Satoshi Nakamoto, a pseudonymous person or team who outlined the technology in a 2008 white paper. It’s a simple concept: bitcoin is digital money that allows for secure peer-to-peer transactions on the Internet. The invention of Bitcoin was a breakthrough in cryptography. Bitcoin’s key innovation was the blockchain — a piece of software that acts like a ledger, logging every transaction ever made using bitcoin. Unlike a bank’s ledger, the Bitcoin blockchain is distributed and verified across a network of computers. No company, country, or third party is in control of it. And anyone can become part of that network.",
    img: bitcoin,
  },
  {
    crypto: "TETHER",
    ticker: "USDT",
    description:
      "Tether (USDT) is an Ethereum token that is pegged to the value of a U.S. dollar (also known as a stablecoin). Tether’s issuer claims that USDT is backed by bank reserves and loans which match or exceed the value of USDT in circulation. Important note: at this time, Coinbase only supports USDT on the Ethereum blockchain (ERC-20). Do not send USDT on any other blockchain to Coinbase.",
    img: tether,
  },
  {
    crypto: "US DOLLAR COIN",
    ticker: "USDC",
    description:
      "USD Coin (USDC) is a stablecoin redeemable on a 1:1 basis for US dollars, backed by dollar denominated assets held in segregated accounts with US regulated financial institutions. The launch of USDC was powered by a collaboration between Coinbase and Circle through the co-founding of the CENTRE Consortium. Coinbase customers with US dollar accounts may exchange 1 USDC for US$1.00 (and vice versa) on Coinbase in jurisdictions where USDC support is available. The graph above reflects USDC’s current and historical redemption value of US$1.00, which may not match the price of USDC on other exchanges. Note: Coinbase only supports USDC running on Ethereum (ERC-20).",
    img: usdCoin,
  },
  {
    crypto: "RIPPLE",
    ticker: "XRP",
    description:
      "Through blockchain technology, Ripple enables global financial institutions, businesses, governments and developers to move, manage and tokenize value, helping to unlock greater economic opportunity for everyone, everywhere......But is no longer tradeable in light of SEC actions against them",
    img: xrp,
  },
  {
    crypto: "CARDANO",
    ticker: "ADA",
    description:
      "Cardano is one of the biggest cryptocurrencies by market cap. It’s designed to be a next-gen evolution of the Ethereum idea — with a blockchain that’s a flexible, sustainable, and scalable platform. Cardano aims to enable smart contracts, which will allow developers to build a wide range of decentralized finance apps, new crypto tokens, games, and more. According to the creators of Cardano, “Ouroboros is the first provably secure proof-of-stake protocol… more secure, scalable, and energy-efficient than anything that has come before.",
    img: cardano,
  },
  {
    crypto: "UNISWAP",
    ticker: "UNI",
    description:
      "Uniswap is the largest decentralized exchange (or DEX) operating on the Ethereum blockchain. It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap on Coinbase.",
    img: uniswap,
  },
  {
    crypto: "STELLAR",
    ticker: "XLM",
    description:
      "Stellar’s cryptocurrency, the Stellar Lumen (XLM), powers the Stellar payment network. As a cross-border transfer and payment system that connects financial entities, Stellar aims to unite the world’s financial infrastructure, connecting banks, payment systems, and individuals with near-instant and secure transfers.",
    img: stellar,
  },
  {
    crypto: "SOLANA",
    ticker: "SOL",
    description:
      "Solana is a crypto-computing platform that aims to achieve high transaction speeds without sacrificing decentralization. Like Ethereum, Solana is both a cryptocurrency and a flexible platform for running decentralized apps (dapps) — everything from Degenerate Apes to the Serum decentralized exchange (or DEX). Its major innovation is speed, via a bundle of new technologies including a consensus mechanism called proof of history (PoH). Solana can process around 50,000 transactions per second — compared to 15 or less for Ethereum (the ETH2 upgrade, which is currently underway, is designed to make Ethereum much faster than it is now).",
    img: solana,
  },
  {
    crypto: "THE GRAPH",
    ticker: "GRT",
    description:
      " The Graph (GRT) is a protocol for indexing and accessing blockchain data. The Graph indexes blockchain records from networks like Ethereum in the same way that Google indexes the web. The Graph is a global data layer that runs on top of blockchains and storage networks, acting as a uniting and organizing factor for the decentralization movement. In simple terms, The Graph organizes the data and makes it easy to retrieve it from the blockchain",
    img: graph,
  },
  {
    crypto: "DOGECOIN",
    ticker: "DOGE",
    description:
      "Dogecoin (DOGE) was created as a lighthearted alternative to traditional cryptocurrencies like Bitcoin in 2013. The name and Shiba Inu logo are based on a meme. Unlike Bitcoin, which was designed to be scarce, Dogecoin is intentionally abundant — with 10,000 new coins mined every minute and no maximum supply.",
    img: dogecoin,
  },
  {
    crypto: "POLKADOT",
    ticker: "DOT",
    description:
      "Polkadot, like many post-Bitcoin cryptocurrencies, is both a token that can be bought or sold via exchanges like Coinbase and a decentralized protocol. The Polkadot protocol is designed to allow unrelated blockchains to securely talk to each other, so that value or data can flow between, say, the Ethereum and Bitcoin blockchains without any intermediary. It’s also designed to be speedy and scalable, via the use of many parallel blockchains (or “parachains”) that take much of the processing demand off of the main blockchain.   ",
    img: polkadot,
  },
  {
    crypto: "CHAINLINK",
    ticker: "LINK",
    description:
      "Chainlink (LINK) is a decentralized system of nodes that aims to connect data and information from outside a blockchain to on-chain smart contracts. Chainlink enhances smart contract capabilities by allowing access to real-world data and off-chain computing while retaining the security of blockchain technology.",
    img: chainlink,
  },
  {
    crypto: "POLYGON",
    ticker: "MATIC",
    description:
      "Polygon (MATIC) is an Ethereum token that powers the Polygon Network — a protocol and framework for building and connecting Ethereum-compatible blockchain networks. Polygon is what’s known as a Layer-2 solution, designed to help scale the Ethereum network and improve its functionality. The protocol aims for faster, cheaper Ethereum transactions using sidechains, blockchains that run like speedy HOV lanes alongside the Ethereum main chain.",
    img: polygon,
  },
  {
    crypto: "TEZOS",
    ticker: "XTZ",
    description:
      "Tezos (XTZ) is a cryptocurrency and a decentralized computing platform that aims to overcome fundamental hurdles to blockchain adoption for assets and applications. The Tezos blockchain network, which is supported by a worldwide community of validators, researchers, and builders, seeks to deploy complicated smart contracts for asset settlement and decentralized apps (DApps). Tezos aims to make it simple for developers to create advanced tools and products while new users may experience NFTs, DeFi, gaming, and other features across hundreds of Tezos-powered DApps. The network aims to enable high-value use cases both at protocol and application layers facilitating formal verification, a practice popularly used in mission-critical enterprises, spanning from nuclear and aviation to semiconductors and more.",
    img: tezos,
  },
  {
    crypto: "COSMOS",
    ticker: "ATOM",
    description:
      "Cosmos (ATOM) is a cryptocurrency that powers an ecosystem of blockchains designed to scale and interoperate with each other. The team aims to create an Internet of Blockchains, a network of blockchains able to communicate with each other in a decentralized way. Cosmos is a proof-of-stake chain. ATOM holders can stake their tokens in order to maintain the network and receive more ATOM as a reward.",
    img: cosmos,
  },
  {
    crypto: "THETA NETWORK",
    ticker: "THETA",
    description:
      "Theta Network is the next generation media and entertainment focused blockchain. Theta infrastructure enables existing video and media platforms to drive incremental revenues and reduce content delivery CDN costs while rewards end-users for sharing their storage and/or bandwidth on any PC, mobile, Smart TV or IoT device. Theta supports Turing complete smart contracts, and is fully compatible with Ethereum. This enables a wide range of interesting Web3 applications to be built on the Theta Network. Examples include non-fungible tokens (NFT), decentralized exchanges (DEX/DeFi), and decentralized autonomous organizations (DAO), which could become indispensable building blocks of the next generation media and entertainment platforms.",
    img: theta,
  },
  {
    crypto: "MONERO",
    ticker: "XMR",
    description:
      "According to the website, Monero (XMR) is a decentralized digital currency. Users can trade Monero securely and at a low cost for goods, services, and other cryptocurrencies. The price of Monero rises when demand exceeds supply and falls when supply exceeds demand. Besides this, Monero provides users with the privacy and anonymity of their transactions. Monero is untraceable since every transaction is private. Every transaction's sender, receiver, and amount are masked using three key technologies: stealth addresses, ring signatures, and RingCT.",
    img: monero,
  },
  {
    crypto: "CHILIZ",
    ticker: "CHZ",
    description:
      "Chiliz, also trading under the ticker CHZ, aims to be the world's leading fintech provider for sports and entertainment. The cryptocurrency is used for blockchain-backed products and services targeted toward mainstream consumers. Precisely, the CHZ is anEthereum-based utility token that serves as the official cryptocurrency of the Socios.com platform.",
    img: chiliz,
  },
  {
    crypto: "SHIBA INU",
    ticker: "SHIB",
    description:
      "Shiba Inu (SHIB) was developed to answer a simple question: What would happen if a cryptocurrency project was 100 percent run by its community?SHIB is a token designed to be an Ethereum-compatible alternative to Dogecoin (DOGE). Like DOGE, SHIB is intentionally abundant — with an initial circulating supply of one quadrillion coins. The Shiba Inu ecosystem also supports projects such as an NFT art incubator and a decentralized exchange called Shibaswap.",
    img: shiba,
  },
];

const assignData = (data) => {
  let match = tickers.find((coin) => coin.ticker === data);
  return match;
};

const assignName = (value) => {
  let name = tickers.find((tick) => tick.ticker === value);
  return name.crypto;
};

export { assignDecimalPlaces, assignName, tickers, assignData, favorites };
