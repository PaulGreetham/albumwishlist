import React, { useState } from 'react';
import './Input.css';

function Input(props) {
  const [artist, setArtist] = useState('');
  const [albumTitle, setAlbumTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(artist, albumTitle);
    setArtist('');
    setAlbumTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="input">
      <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} placeholder="Artist" />
      <input type="text" value={albumTitle} onChange={(event) => setAlbumTitle(event.target.value)} placeholder="Album Title" />
      <button type="submit">Add Album</button>
    </form>
  );
}

export default Input;
