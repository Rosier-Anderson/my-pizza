import React from 'react';
import Home from './pages/Home' 
import './styles/App.scss';
import Header from './component/Header';
import Menu from './pages/Menu';
import About from './pages/About'


function App() {
  return (
    <div className="App">
     <Header/>
      <main id='_main'>
       <About/>
        
      </main>
    
    </div>
  );
}

export default App;
