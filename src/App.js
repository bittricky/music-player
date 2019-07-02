import React from 'react';

import Search from './components/Search';
import Details from './components/Details';

import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <Details title={'track title'} />
    </div>
  );
}

export default App;
