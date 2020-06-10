import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TopStories from './components/TopStories';

function App() {
  return (
    <div>
      <Navbar />
      <TopStories />
    </div>
  );
}

export default App;
