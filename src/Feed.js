import React, { useState, useEffect } from "react";

import "./Feed.css";

const Feed = ({ setFav }) => {
  const [newData, setNewData] = useState([]);
  const [showInfo, setShowInfo] = useState();
  const [oldData, setOldData] = useState([]);

  const handler = async () => {
    await fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=06ea184b9ebb49c5493abba08e708c57&format=json&nojsoncallback=1&auth_token=72157718994566497-7a66e2c801a01fab&api_sig=ba0dc558a567d2e155caec3894c76c3a"
    )
      .then((response) => response.json())
      .then((response) => setNewData([...newData, ...response.photos.photo]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handler();
  }, []);

  window.onscroll = async function () {
    const position =
      (window.innerHeight + window.scrollY) / document.body.offsetHeight;
    if (position >= 0.95 && oldData !== newData) {
      setOldData(newData);
      await handler();
    }
  };

  const randomKey = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
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
      {newData.map((item) => (
        <div
          key={randomKey()}
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
              <button
                onClick={() => {
                  setFav(item);
                }}
              >
                Favourite
              </button>
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

export default Feed;
