import "./TabSelector.css";

const TabSelector = () => {
  const handlePageView = () => {};

  return (
    <div className="tabs">
      <button className="tab-selector" onClick={handlePageView()}>
        market-movers-tab
      </button>
      <button className="tab-selector" onClick={handlePageView()}>
        top-fifteen-tab
      </button>
      <button className="tab-selector" onClick={handlePageView()}>
        favorites-tab
      </button>
    </div>
  );
};

export default TabSelector;
