import "./Definitions.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { tickers } from "../../utils";
import Coin from "../coin/Coin";
// import

const Definitions = () => {
  const [ticker, setTicker] = useState("");
  //   const [submitted, setSubmitted] = useState(true);

  const handleSubmit = () => {
    // setSubmitted(false);
    <Coin ticker={ticker} />;
  };

  const handleTickerSelect = (event) => {
    setTicker(event.target.value);
  };

  return (
    <>
      <div className="tab-selector">
        <select value={ticker} name={ticker} onChange={handleTickerSelect}>
          <option>--Choose A Top Alt--</option>
          {tickers.map((stock) => {
            return <option value={stock.ticker}>{stock.crypto}</option>;
          })}
        </select>
        <Link to={`/coin/${ticker}`}>
          <button onClick={handleSubmit}>Try?</button>
        </Link>
      </div>
      <p>
        Welcome to ALT-Coinsters, a safe place for learning about the ins and
        outs of alt-coins..specifically the good ones. If you are alreayd
        familiar with the crypto space feel free to look at some of my personal
        favorites above
      </p>
      <p>
        If not no worries, we got you covered by bringing you right where you
        need to be. Below you will see definitions of what all these words means
        and help teach you the things that are Important to know at surface
        level
      </p>
      <h2>For starters what is an Alt-coin even?</h2>
      <p>
        Altcoins are generally defined as all cryptocurrencies other than
        Bitcoin (BTC). However, some people consider altcoins to be all
        crytocurrencies other than Bitcoin and Ethereum (ETH) because most
        cryptocurrencies are forked from one of the two. Some altcoins use
        different consensus mechanisms to validate transactions and open new
        blocks, or attempt to distinguish themselves from Bitcoin and Ethereum
        by providing new or additional capabilities or purposes. Most altcoins
        are designed and released by developers who have a different vision or
        use for their tokens or cryptocurrency. Learn more about altcoins and
        what makes them different from Bitcoin.
      </p>
      <h2>Types of Altcoins</h2>
      <p>
        Altcoins come in various flavors and categories. Here’s a brief summary
        of some of the types of altcoins and what they are intended to be used
        for. It is possible for an altcoin to fall into more than one category
      </p>
      {/* <ul> */}
      <li>Payment Token</li>
      <p>
        As the name implies, payment tokens are designed to be used as
        currency—to exchange value between parties.{" "}
        <Link to="/coin/BTC">
          <button onClick={handleSubmit}>Bitcoin</button>
        </Link>
        is the prime example of a payment token.
      </p>
      {/* </ul> */}
      <li>StableCoins</li>
      <p>
        Cryptocurrency trading and use have been marked by volatility since
        launch. Stablecoins aim to reduce this overall volatility by pegging
        their value to a basket of goods, such as fiat currencies, precious
        metals, or other cryptocurrencies. The basket is meant to act as a
        reserve to redeem holders if the cryptocurrency fails or faces problems.
        Price fluctuations for stablecoins are not meant to exceed a narrow
        range. In March 2021, payment processing giant Visa Inc. (V) announced
        that it would begin settling some transactions on its network in
        <Link to="/coin/USDC">
          <button onClick={handleSubmit}>USDC</button>
        </Link>
        over the Ethereum blockchain.{" "}
        <Link to="/coin/USDT">
          <button onClick={handleSubmit}>Tether</button>
        </Link>{" "}
        is a another notable StableCoin by definition.
      </p>
      <li>Utility Tokens</li>
      <p>
        Utility tokens are used to provide services within a network. For
        example, they might be used to purchase services, pay network fees, or
        redeem rewards. Filecoin, which is used to buy storage space on a
        network and secure the information, is an example of a utility token. 4
        Ether (ETH) is also a utility token. It is designed to be used in the
        Ethereum blockchain and virtual machine to pay for transactions. The
        stable coin USTerra uses utility tokens to attempt to maintain its peg
        to the dollar—which it lost on May 11, 2022—by minting and burning two
        utility tokens to create downward or upward pressure on its price. 5
        Utility tokens can be purchased on exchanges and held, but they are
        meant to be used in the blockchain network to keep it functioning.
      </p>
      <li>Security Tokens</li>
      <p>
        Security tokens are tokenized assets offered on stock markets.
        Tokenization is the transfer of value from an asset to a token, which is
        then made available to investors. Any asset can be tokenized, such as
        real estate or stocks. For this to work, the asset must be secured and
        held. Otherwise, the tokens are worthless because they wouldn't
        represent anything. Security tokens are regulated by the Securities and
        Exchange Commission because they are designed to act as securities.
        Security tokens are not yet available for retail investors on public
        stock or cryptocurrency exchanges but it is important to be aware of
        them because adaptation could change the space drastically
      </p>
    </>
  );
};
export default Definitions;
