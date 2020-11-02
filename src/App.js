import React from 'react';
import './scss/App.scss';
import AddItem from './components/AddItem';
import List from './components/List';

function App() {
  return (
    <div className="App grid">
      <header className="App-header">
       Shopping List
      </header>
      <AddItem />
      <List />

    </div>
  );
}

export default App;
