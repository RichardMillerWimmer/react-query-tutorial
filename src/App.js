import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { People } from './components/People';
import { Planets } from './components/Planets';

function App() {
  const [page, setPage] = useState('planets')

  return (
    <div className="App">
      <h1>Star Wars React-Query Project</h1>
      <NavBar setPage={setPage}/>
      <div className="content">
        { page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
