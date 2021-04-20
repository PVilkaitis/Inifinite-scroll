import React, { useState } from "react";

import "./Fav.css";
import "./Feed.css";

const Fav = ({ fav, setFav }) => {
  const [showInfo, setShowInfo] = useState();

  const unlikeHandler = (props) => {
    setFav(fav.filter((item) => item.id !== props));
  };

  const openInfo = (e, id) => {
    e.preventDefault();
    setShowInfo(id);
  };
  const closeInfo = (e) => {
    e.preventDefault();
    setShowInfo(null);
  };

  return (
    <div className="feed">
      {fav.map((item) => (
        <div
          key={item.id}
          className="feed-item"
          onMouseEnter={(e) => openInfo(e, item.id)}
          onMouseLeave={(e) => closeInfo(e)}
        >
          <div
            className={
              showInfo === item.id ? "feed-item-info-on" : "feed-item-info-off"
            }
          >
            <div className="feed-item-info-wrap">
              <h3>Lorem ipsum</h3>
              <hr />
              <p>Author: {item.owner}</p>
              <button onClick={() => unlikeHandler(item.id)}>Unlike</button>
            </div>
          </div>
          <img
            className="feed-item-photo"
            src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`}
            alt="pic"
          />
        </div>
      ))}
    </div>
  );
};

export default Fav;
