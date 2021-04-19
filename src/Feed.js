import React, { useState, useEffect } from "react";

import "./Feed.css";

const Feed = () => {
  const [photos, setPhotos] = useState([]);
  const [newData, setNewData] = useState([]);
  const [showInfo, setShowInfo] = useState();

  useEffect(() => {
    const handler = async () => {
      await fetch(
        "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=6bf568d142fa43efa5ec6c529c346ac0&format=json&nojsoncallback=1&auth_token=72157718961980439-b1858a173f8c06d6&api_sig=41735200466b0bad56b34ece3a817930"
      )
        .then((response) => response.json())
        .then((response) => setNewData(response.photos.photo))
        .catch((error) => console.log(error));
    };
    handler();
  }, []);

  // useEffect(() => {
  //   newData.map((item) =>
  //     setPhotos((photos) => [
  //       ...photos,
  //       `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`,
  //     ])
  //   );
  // }, [newData]);

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
              <button>Favourite</button>
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
