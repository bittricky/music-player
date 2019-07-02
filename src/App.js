import React from 'react';

import Search from './components/Search';
import Details from './components/Details';
import Player from './components/Player';

import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <Details title={'track title'} />
      <Player />
    </div>
  );
}

export default App;
