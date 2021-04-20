import React from "react";

import "./Header.css";

const Header = ({ showFeedHandler, closeFeedHandler }) => {
  return (
    <div className="header">
      <button onClick={() => closeFeedHandler()}>Favourites</button>
      <button onClick={() => showFeedHandler()}>Feed</button>
    </div>
  );
};

export default Header;
