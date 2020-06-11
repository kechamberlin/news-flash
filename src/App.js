import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

import TopStories from './components/TopStories';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <TopStories />
      <Footer />
    </div>
  );
}

export default App;
