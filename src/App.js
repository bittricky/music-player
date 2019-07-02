import React from 'react';

import Search from './components/Search';
import Details from './components/Details';
import Player from './components/Player';
import Progress from './components/Progress';

import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <Details title={'track title'} />
      <Player />
      <Progress position={'0.3'} elapsed={'00:00'} total={'0:40'} />
    </div>
  );
}

export default App;
