import React , {useState} from 'react';
import './style.css'

const Modal = () =>{

    const [modal , setModal] = useState(false);

    const toggleModal = ()=>{
        setModal(!modal)
    };

        if(modal){
            document.body.classList.add('active-modal')
        }

        else{
            document.body.classList.remove('active-modal')
        }


    

     return ( 
        <div>

            <button onClick={toggleModal} className="btn-modal"> Cadastrar</button>

            {modal && ( 

            <div className="modal">

                <div onclick={toggleModal} className="overlay">
                
                <div className="modal-content">
                  
                    <h2>Obrigado por se inscrever na nossa newslatter</h2>
                  
                    <p>Em caso de dúvidas entre em contato conosco</p>

            <button className="close-modal" onClick={toggleModal}>Fechar</button>

                 </div>
                
                </div>

                </div>

            )}

           

        </div>
    )
}

export default Modal;