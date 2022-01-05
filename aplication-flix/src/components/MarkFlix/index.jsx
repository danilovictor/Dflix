import React from 'react';
import './style.css';
import news2 from '../../assets/img/news2.png';
import newslater from '../../assets/img/newslater.png';

const MarkFlix = ()=>{
    return( 
        <div>
            <div className="mark-container">

            <h3> Nossa newslatter está cheia de novidades sobre as tendências de filmes , séries e games. <br/>
            Diaramente você receberá nosso e-mail </h3>

            <div className="mark-images">

                <img src={news2} alt="imagem-mark" srcset="" />

                <img src={newslater} alt="imagem-flix" />

            </div>

            </div>
        </div>
    )
}

export default MarkFlix;