import './App.css';
import React from 'react';
import TotalUsers from './components/TotalUsers';
import TotalProducts from './components/TotalProducts';
import TotalCategories from './components/TotalCategories'


function App() {

  return (
    <React.Fragment>

    <div className="App">
      <header className="App-header">
        <TotalUsers />
        <TotalProducts />
        <TotalCategories />
      </header>
    </div>

    </React.Fragment>

  );
}

export default App;
