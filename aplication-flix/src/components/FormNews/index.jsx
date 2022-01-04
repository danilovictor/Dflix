import React from 'react';
import './style.css'

const FormNews = ()=>{
    return ( 
        <div>
            <h2> Receba nossa newslatter</h2>

            <div className="form-center">

            <input className="form-att" type="email" placeholder="Informe seu e-mail" />

           </div>

            <button type="button" className="btn-cadastro"> Cadastrar</button>

            
        </div>
    )
}

export default FormNews;