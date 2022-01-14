import React from 'react';
import './style.css';
import Footer from '../../components/Footer'

const About = ()=>{
    return(
        <div>
            <div className="about-container">

                <div className="title-about">

                    <h3> Oque é a Dflix</h3>

                </div>

                <div className="content-about">

                    <p>Este projeto foi criado para reunir contéudos sobre séries e filmes.
                        Desenvolvido por Danilo Victor - Desenvolvedor frontend. Aprimoramento de conhecimento técnico sobre o framework ReactJs botando a teoria em prátrica.
                    </p>

                    <h3>Tecnologias</h3>

                    <p>ReactJs - ReactHooks - React Router Dom V6 - ModalJs</p>

                </div>

            </div>
            <Footer className="footer-fixed"/>
        </div>
    )
}

export default About;