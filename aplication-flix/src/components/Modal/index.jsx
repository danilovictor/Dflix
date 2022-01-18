import React , {useState} from 'react';
import './style.css'

const Modal = () =>{

    const [modal , setModal] = useState(false);

    const toggleModal = ()=>{
        setModal(!modal)
    };

     return ( 
        <div>

            <button onClick={toggleModal} className="btn-modal"> Abrir Modal</button>

            {modal && ( 

            <div className="modal">

                <div onclick={toggleModal} className="overlay">
                
                <div className="modal-content">
                  
                    <h2>Obrigado por se inscrever na nossa newslatter</h2>
                  
                    <p>Em caso de duvidas entre em contato conosoco</p>

            <button className="close-modal" onclick={toggleModal}> Fechar</button>

                 </div>
                
                </div>

                </div>

            )}

           

        </div>
    )
}

export default Modal;