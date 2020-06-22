import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import AmericanNews from './components/AmericanNews';
import Opinion from './components/Opinion';
import World from './components/World';
import Politics from './components/Politics';
import Business from './components/Business';
import SciTech from './components/SciTech';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <AmericanNews />
      <Opinion />
      <World />
      <Politics />
      <Business />
      <SciTech />
      <Footer />
    </div>
  );
}

export default App;
