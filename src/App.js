import React from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
//import SWData from './components/SWData';
//import Window from './components/Window';

function App() { 


  return (
    <div className="App">
        <Header />
        <Meme />
        {/*<SWData />*/}
        {/*<Window />*/}
    </div>
  );
}

export default App;