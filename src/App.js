import React, { useState } from 'react';
import Cards from './components/cards/Cards';
import Input from './components/input/Input';
import Title from './components/title/Title';
import './App.css';

function App() {
  const [albumList, setAlbumList] = useState([]);
  const artist = 'Your favorite artist'; // Replace this with the appropriate artist name

  const handleAddAlbum = (artist, albumTitle) => {
    if (artist && albumTitle) {
      setAlbumList((prevAlbumList) => [
        ...prevAlbumList,
        {
          id: Date.now(),
          artist: artist,
          albumTitle: albumTitle,
          bought: false,
        },
      ]);
    }
  };

  return (
    <div className="app">
      <Title />
      <Input artist={artist} onSubmit={handleAddAlbum} />
      <Cards albumList={albumList} setAlbumList={setAlbumList} />
    </div>
  );
}

export default App;
