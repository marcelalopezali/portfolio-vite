import React from "react";
import './SectionBox.css';
import mmusc from '../../assets/mmusc.jpg'
import low from '../../assets/low.jpg'
import nadar from '../../assets/nadar.jpg'
import cm from '../../assets/cm.jpg'


function SectionBox() {

    return (
        <section className="boxWorks" id="boxWorks">
            <h3> <span className="white">Formación</span> <span>continua</span></h3>
            <div className="card1">
                <img src="" alt="" />
                <div className="planes">
                    <h1>Posgrado en Obesidad</h1>
                    <h5>Universidad Favaloro</h5>
                    <button className="btnCard">2022</button>
                </div>
            </div>
            <div className="card3">
            <img src="" alt="foto" />
                <div className="planes">
                    <h1>Nutrición aplicada a Deportes Específicos</h1>
                    <h5>Posgrado Colegio Americano de Medicina del Deporte</h5>
                    <button className="btnCard">2017</button>
                </div>
            </div>
            <div className="card4">
                <img src="" alt="" />
                <div className="planes">
                    <h1>Técnica Antropometrista</h1>
                    <h5>ISAK II</h5>
                    <button className="btnCard">2017</button>
                </div>
            </div>
            <div className="card2">
                <img src="" alt="" />
                <div className="planes">
                    <h1>Nutrición Deportiva</h1>
                    <h5>Posgrado Colegio Americano de Medicina del Deporte</h5>
                    <button className="btnCard">2016</button>
                </div>
            </div>
            <a href="#nav"><h5>Volver al inicio</h5></a>
        </section>
    );
}

export { SectionBox }