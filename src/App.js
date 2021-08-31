import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { People } from './components/People';
import { Planets } from './components/Planets';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient()

// test comment and push after github profile changes

function App() {
  const [page, setPage] = useState('planets')

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars React-Query Project</h1>
        <NavBar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
