import './App.css';
import { AppContext } from './context.js';
import { useState } from 'react';

//component imports
import Header from './components/header/Header';
import Options from './components/options/Options';
import Button from './components/button/Button';
import Rules from './components/rules/Rules';
import Results from './components/results/Results';
import Banner from './components/results/banner/Banner';

function App() {

  const [ store, setStore ] = useState({
    score: 0,
    rules: false,
    results: false,
    selection: null,
    outcome: null
  });

  return (
    <AppContext.Provider value={{store, setStore}}>
      <div className="App">
        <Header />
        {!store.results ? <Options /> : <Results />}
        {!store.results ? null : <Banner outcome={store.outcome}/>}
        <Rules />
        <Button />
      </div>
    </AppContext.Provider>
  );
}

export default App;
