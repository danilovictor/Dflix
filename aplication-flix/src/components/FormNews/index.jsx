import React , {useState} from 'react';
import './style.css'
import Modal from '../Modal';

const FormNews = ()=>{



    return ( 
        <div>
            <h2 className="title-form"> Receba nossa newslatter</h2>

            <div className="form-center">

            <input className="form-att" type="email" placeholder="Informe seu e-mail" />

           </div>

            <button className="btn-cadastro"> Cadastrar</button>
            
            <Modal/>
            
        </div>
    )
}

export default FormNews;