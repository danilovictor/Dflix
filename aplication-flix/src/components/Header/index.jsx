import React from 'react';
import './style.css'
import bg from '../../assets/img/bg.png'

const Header = ()=>{
    return ( 
        <div>
            <div className="header-container">

                <div className="title-flix">

                    <p>
                    DFlix a melhor <br/> plataforma <br/> de conteúdos sobre <br/> séries <br/> e filmes em um só <br/>lugar
                    </p>
                </div>

                

                <div className="img-suols">

                <img src={bg}/>

                </div>

            </div>
        </div>
    )
}

export default Header;