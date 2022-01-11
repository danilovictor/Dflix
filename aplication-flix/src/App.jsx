import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
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
import Home from '../src/pages/Home';


function App() {
 
  return (

    <BrowserRouter>
    
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

    </BrowserRouter>
  )
}

export default App;
