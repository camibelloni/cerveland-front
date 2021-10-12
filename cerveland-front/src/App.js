import './App.css';
import React from 'react';
import TotalCardsRow from './components/TotalCardsRow';
import GroupProductsByCategory from './components/GroupProductsByCategory';



function App() {

  return (
    <React.Fragment>

    <div className="App">
      
      <div className="App-header">
        <TotalCardsRow />
      </div>

      <div className="App-header">
          <GroupProductsByCategory />
      </div>
    </div>


    </React.Fragment>

  );
}

export default App;
