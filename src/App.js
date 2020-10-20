import React from 'react';
import './App.scss';
import AddItem from './components/addItem';
import List from './components/list';

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
