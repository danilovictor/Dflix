import React from 'react';
import './style.css';
import Footer from '../../components/Footer';
import Api from '../../services/Api';


const Movies = ()=>{
    return (
        <div>
            <div className="movies-container">

            <h3>Filmes em cartazes</h3>

            <Api/>

            </div>
            <Footer/>
        </div>
        
    )
}

export default Movies;