import React from 'react';
import Cards from './components/cards/Cards';
import Input from './components/input/Input';
import Title from './components/title/Title';
import './App.css';

function App() {
  return (
    <div className="app">
      <Title />
      <Input />
      <Cards />
    </div>
  );
}

export default App;
