import React from 'react';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import './App.css';
import Home from './Components/HTML/Home';
import Banner from './Components/HTML/Banner';
import Nav from './Components/HTML/Nav';
import Footer from './Components/HTML/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Banner />
        <Routes>

          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
