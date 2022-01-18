import React from 'react';
import './style.css';
import Footer from '../../components/Footer';
import ArtNews from '../../components/ArtNews';

const Movies = ()=>{
    return (
        <div>
            <div className="movies-container">


                <ArtNews/>

            </div>
            <Footer/>
        </div>
        
    )
}

export default Movies;