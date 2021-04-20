import React, { useState, useEffect } from "react";

import "./App.css";
import Feed from "./Feed";
import Fav from "./Fav";
import Header from "./Header";

function App() {
  const [fav, setFav] = useState([]);
  const [showFeed, setShowFeed] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("favourites");
    if (data) {
      setFav(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(fav));
  }, [fav]);

  const favHandler = (props) => {
    setFav([...fav, props]);
  };
  const showFeedHandler = () => {
    setShowFeed(true);
  };
  const closeFeedHandler = () => {
    setShowFeed(false);
  };

  return (
    <div className="App">
      <Header
        showFeedHandler={showFeedHandler}
        closeFeedHandler={closeFeedHandler}
      />

      {showFeed ? (
        <Feed setFav={favHandler} />
      ) : (
        <Fav fav={fav} setFav={setFav} />
      )}
    </div>
  );
}

export default App;
