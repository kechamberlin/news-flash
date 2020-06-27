import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import AmericanNews from './components/AmericanNews';
import World from './components/World';
import Politics from './components/Politics';
import Health from './components/Health';
import Business from './components/Business';
import Science from './components/Science';
import Technology from './components/Technology';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <AmericanNews />
      <World />
      <Politics />
      <Health />
      <Business />
      <Science />
      <Technology />
      <Footer />
    </div>
  );
}

export default App;
