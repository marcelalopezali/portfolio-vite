import React from 'react';
import './SectionAbout.css';


import {BsCircleFill} from 'react-icons/bs';


const SectionAbout = () => {
    return(
        <section className="aboutMe" id="aboutMe">
            <div className="imgPan"></div>
            <div className="textAb">
                <div className="texto">
                    <h2>Ab<span>out</span></h2> <h2>me</h2>
                    <h3><BsCircleFill className='circulo'/></h3>
                </div>
                <div className="texto">
                    <button className="btnCard1">info</button>
                    <h5>marcela lopez ali</h5><h5>03/05/1985</h5><h5>marcelalopezali@gmail.com</h5>
                    <button className="btnCard1">educacion</button>
                    <h5>unsta</h5><h5>2010</h5>
                    <button className="btnCard1">experiencia</button>
                    <h5>cedic - 2011 a la actualidad</h5><h5>ios - 2020 a la actualidad</h5><h5>hospital interzonal jose penna - 2012-2019</h5>
                </div>
                <div className="texto">
                    <a href="#" target="_blank"></a>
                    {/*<a><h5>Curriculum Vitae Completo</h5></a>*/}
                </div>
                <a href="#nav"><h5>Volver al inicio</h5></a>
            </div> 
         </section>
    )
}

export { SectionAbout }