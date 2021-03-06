import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Menu = ()=>{
    return(
        
        <div>
            <div className="menu-container p-3">
                
                
                <div className="logo">
                    <h2>Dflix</h2>
                </div>
                
                
                <div className="menu-header">

                    <ul>
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/artigos"> Artigos</Link></li>
                        <li><Link to="/movies"> Filmes</Link></li>
                        <li><Link to="/sobre"> Sobre</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Menu;