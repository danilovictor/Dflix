import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import ArtNews from './components/ArtNews';
import FormNews from './components/FormNews';
import MarkFlix from './components/MarkFlix';
import Branch from './components/Branch';
import Footer from './components/Footer';

import Article from '../src/pages/Article';
import Movies from '../src/pages/Movies';
import About from '../src/pages/About';


function App() {
 
  return (
    <div>
      <Menu/>
      <Header/>
      <ArtNews/>
      <FormNews/>
      <MarkFlix/>
      <Branch/>
      <Footer/>

      <Routes>
        
        <Route path="/movies" element={<Movies/>}/> 
        <Route path="/artigos" element={<Article/>}/> 
        <Route path="/sobre" element={<About/>}/> 
      
      </Routes>
    </div>
  )
}

export default App;
