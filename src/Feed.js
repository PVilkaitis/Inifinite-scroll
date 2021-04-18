import React, { useState, useEffect } from "react";

import "./Feed.css";

const Feed = () => {
  const [photos, setPhotos] = useState([]);
  const [newData, setNewData] = useState([]);

  const handler = async () => {
    await fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5ce3b7b157a24408642b5993c2f3c128&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((response) => setNewData(response.photos.photo))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    newData.map((item) =>
      setPhotos((photos) => [
        ...photos,
        `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`,
      ])
    );
  }, [newData]);

  return (
    <div className="feed">
      <button onClick={handler}>click me </button>
      {photos.map((item) => (
        <img src={item} alt="pic" />
      ))}
    </div>
  );
};

export default Feed;
