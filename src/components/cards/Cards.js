import React, { useEffect } from 'react';
import './Cards.css';

function Cards({ albumList, setAlbumList }) {
  useEffect(() => {
    const albums = JSON.parse(localStorage.getItem('albums') || '[]');
    if (albums) {
      setAlbumList(albums);
    }
  }, [setAlbumList]);

  useEffect(() => {
    localStorage.setItem('albums', JSON.stringify(albumList));
  }, [albumList]);

  const handleToggle = (id) => {
    setAlbumList((prevAlbumList) => {
      const index = prevAlbumList.findIndex((album) => album.id === id);
      const updatedAlbum = { ...prevAlbumList[index], bought: !prevAlbumList[index].bought };
      const updatedAlbumList = prevAlbumList.filter((album) => album.id !== id);
      if (updatedAlbum.bought) {
        updatedAlbumList.push(updatedAlbum);
      } else {
        updatedAlbumList.splice(index, 0, updatedAlbum);
      }
      return updatedAlbumList;
    });
  };

  const handleDelete = (id) => {
    setAlbumList((prevAlbumList) => prevAlbumList.filter((album) => album.id !== id));
  };

  return (
    <div className="cards">
      <div className="cards__list">
        {albumList.map((album) => (
          <div key={album.id} className={`card ${album.bought ? 'card--bought' : ''}`}>
            <div className="card__content">
              <div className="card__text">
                <h3>{album.albumTitle}</h3>
                <p>{album.artist}</p>
              </div>
              <div className="card__buttons">
                <button onClick={() => handleToggle(album.id)}>
                  {album.bought ? 'You Bought Me' : 'Buy Me'}
                </button>
                <button onClick={() => handleDelete(album.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
