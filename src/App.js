import React from 'react';
import './App.css';

// Compontents
import NavBar from './components/navbar/navbar'
import Main from './components/home/home'
import Footer from './components/footer/footer';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
