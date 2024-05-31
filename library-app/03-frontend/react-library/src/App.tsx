import React from 'react';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import './App.css';
import { ExploreTopBooks } from './layouts/HomePage/components/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/components/Carousel';
import { Heros } from './layouts/HomePage/components/Heros';
import { LibraryServices } from './layouts/HomePage/components/LibraryServices';
import { HomePage } from './layouts/HomePage/HomePage';

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
