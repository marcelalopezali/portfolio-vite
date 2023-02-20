import React from "react";
import './SectionForm.css';
import { useState } from "react";


const SectionForm = () => {


    
 
    

       return(
        <section className="form" id="form">
            <form action="https://formspree.io/f/xqkoppgj" method="POST" >

                <div className="boxForm">
                    <div className="textForm">
                        <h5>How to</h5>
                        <h5>contacts</h5>
                        <span>me?</span>
                    </div>
            
                    <div className="sendForm">
                        <h3>Dejanos tu consulta</h3>

                        <label htmlFor="nombre"></label>
                        <input className="inputForm" type="text" name="inputMensaje" placeholder="nombre"/>
                        
                        <label htmlFor="email"></label>
                        <input className="inputForm" type="e-mail" name="inputMensaje" placeholder="mail"/>

                        <label htmlFor="comentarios"></label>
                        <textarea  className="inputForm" name="comentarios" cols="15" rows="5" placeholder="Tus comentarios"></textarea>

                        <button type= "submit" className="send">Enviar</button>
                    </div>
                </div>
                
            </form>

            <a href="#nav"><h5>Volver al inicio</h5></a>
        </section>
    )
}

export { SectionForm }