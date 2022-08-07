import "./Definitions.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { tickers } from "../../utils";
import Coin from "../coin/Coin";

const Definitions = () => {
  const [ticker, setTicker] = useState("");

  const handleSubmit = () => {
    <Coin ticker={ticker} />;
  };

  const handleTickerSelect = (event) => {
    setTicker(event.target.value);
  };

  return (
    <div className="homepage">
      <p>
        Welcome to AltCoinsters, a safe place for learning about the ins and
        outs of altcoins..specifically the good ones. If you are already
        familiar with the crypto space feel free to checkout some of my personal
        favorites
      </p>
      <div className="tab-selector">
        <select value={ticker} name={ticker} onChange={handleTickerSelect}>
          <option>---Top Altcoins---</option>
          {tickers.map((stock) => {
            return (
              <option key={Date.now() + stock.ticker} value={stock.ticker}>
                {stock.crypto}
              </option>
            );
          })}
        </select>
        <Link to={`/coin/${ticker}`}>
          {ticker && (
            <button className="search-coin" onClick={handleSubmit}>
              Search
            </button>
          )}
        </Link>
      </div>
      <h2>What's an Alt-coin?</h2>
      <p>
        Altcoins are generally defined as all cryptocurrencies other than
        Bitcoin (BTC). However, some people consider altcoins to be all
        cryptocurrencies other than Bitcoin and Ethereum (ETH) because most
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
      <h2>Payment Token</h2>
      <p>
        As the name implies, payment tokens are designed to be used as
        currency—to exchange value between parties.{" "}
        <Link to="/coin/BTC">
          <button className="coin-button" onClick={handleSubmit}>
            BTC
          </button>
        </Link>
        is the prime example of a payment token.
      </p>
      <h2>StableCoins</h2>
      <p>
        Cryptocurrency trading and use have been marked by volatility since
        launch. Stablecoins aim to reduce this overall volatility by pegging
        their value to a basket of goods, such as fiat currencies, precious
        metals, or other cryptocurrencies. The basket is meant to act as a
        reserve to redeem holders if the cryptocurrency fails or faces problems.
        Price fluctuations for stablecoins are not meant to exceed a narrow
        range which leads to them not straying too far away from $1. In March
        2021, payment processing giant Visa Inc. (V) announced that it would
        begin settling some transactions on its network in{" "}
        <Link to="/coin/USDC">
          <button className="coin-button" onClick={handleSubmit}>
            USDC
          </button>
        </Link>{" "}
        over the Ethereum blockchain.
        <Link to="/coin/USDT">
          <button className="coin-button" onClick={handleSubmit}>
            TETHER
          </button>
        </Link>{" "}
        is a another notable StableCoin by definition.
      </p>
      <h2>Utility Tokens</h2>
      <p>
        Utility tokens are used to provide services within a network. For
        example, they might be used to purchase services, pay network fees, or
        redeem rewards.
        <Link to="/coin/LINK">
          <button className="coin-button" onClick={handleSubmit}>
            LINK
          </button>
        </Link>{" "}
        , my favorite pure utility coin, uses "LINKS" to compensate Chainlink
        Node operators for helping mine the coin.
        <Link to="/coin/ETH">
          <button className="coin-button" onClick={handleSubmit}>
            ETH
          </button>
        </Link>{" "}
        is also a utility token. It is designed to be used in the Ethereum
        blockchain and virtual machine to pay for transactions. Utility tokens
        can be purchased on exchanges and held, but they are meant to be used in
        the blockchain network to keep it functioning.
      </p>
      <h2>The Infamous Meme Coins</h2>
      <p>
        As their name suggests, meme coins are inspired by a joke or a silly
        take on other well-known cryptocurrencies. They typically gain
        popularity in a short period of time, often hyped online by prominent
        influencers or investors attempting to exploit short-term gains. Many
        refer to the sharp run-up in this type of altcoins during April and May
        2021 as "meme coin season,".
        <span>
          As a longer term investor these are not my favorite coins but it does
          give good exposure and experience to the trends of more volatile coins
          that are good for day trading. They also bring a lot of attention to
          the space so it is good to be aware of them since they can cause an
          increase of buying/selling pressures. Good examples are
          <Link to="/coin/DOGE">
            <button className="coin-button" onClick={handleSubmit}>
              DOGE
            </button>
          </Link>
          and{" "}
          <Link to="/coin/SHIB">
            <button className="coin-button" onClick={handleSubmit}>
              SHIBA
            </button>
          </Link>{" "}
        </span>
      </p>
      <h2>Security Tokens</h2>
      <p>
        Security tokens are tokenized assets offered on stock markets.
        Tokenization is the transfer of value from an asset to a token, which is
        then made available to investors. Any asset can be tokenized, such as
        real estate or stocks. For this to work, the asset must be secured and
        held. Otherwise, the tokens are worthless because they wouldn't
        represent anything. Security tokens are regulated by the Securities and
        Exchange Commission because they are designed to act as securities.
        <span>
          Security tokens are not yet available for retail investors on public
          stock or cryptocurrency exchanges but it is important to be aware of
          them because adaptation could change the space completely
        </span>
      </p>
      <h2>Market Movers</h2>
      <span>
        BTC and ETH are the most prominent market movers but there are others to
        be aware of. No matter your opinion of them as a coin itself you have to
        watch the events surrounding them because they will move the entire
        market for the better or the worse.
      </span>
      <p className="reference">
        ***Alot of this information can be found on investopedia.com,
        coinbase.com, and polygon.api. Also these are all opinions, nothing you
        see here is financial advice
      </p>
    </div>
  );
};
export default Definitions;
