import React from 'react';
import './SectionServ.css'


const SectionServ = () => {
    return(
        <section className="servicios">
            <div className="titulo">
                <h2><span className="white">What </span><span>I can</span></h2>
            </div>
            <div className="serviceBtn">
                <div className="textoBtn">
                    <h2>Nutrición para empresas, atención individual y charlas-taller</h2><span>16hs mensuales</span>
                    <h2>Nutrición en instituciones</h2><span>32 horas mensuales</span>
                    <h2>Nutrición y cineantropometría ISAK</h2><span>A convenir</span>
                </div>
                <div className="btnSer">
                    <button className="btnInfo">Info</button>
                    <button className="btnInfo">info</button>            
                    <button className="btnInfo">Info</button>
                </div>
            </div> 
           {/*} <img src="" alt="foto" className='foto'/>*/}
        </section>
    )
}

export { SectionServ }