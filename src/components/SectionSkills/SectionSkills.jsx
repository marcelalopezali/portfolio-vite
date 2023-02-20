import React from 'react';
import './SectionSkills.css';
import {BsCircleFill} from 'react-icons/bs';
import {BsChevronDoubleLeft} from 'react-icons/bs';
import {BsChevronDoubleRight} from 'react-icons/bs';

const SectionSkills = () => {
    
    return(
        <section className="skills">
            <div className="tools">
                <div className="enjoy">
                    <h3 className='h3'><BsChevronDoubleLeft className="left"/>Change your life with healthy food, <span> it is posible</span><BsChevronDoubleRight className='left'/></h3>
                </div>

                <h4>Skills</h4>
                <div className="puntuacion">
                    <div><h3>Comunicación asertiva</h3><button><BsCircleFill className='circle'/><BsCircleFill className='circle'/><BsCircleFill className='circle'/><BsCircleFill className='circle'/><BsCircleFill className='circle'/></button></div>

                    <div><h3>Ingles (B2)</h3><button><BsCircleFill className='circle'/><BsCircleFill className='circle'/><BsCircleFill className='circle'/><BsCircleFill className='circle'/><BsCircleFill className='grey'/></button></div>

                    <div><h3>Office</h3><button><BsCircleFill className='circle'/><BsCircleFill className='circle'/><BsCircleFill className='circle'/><BsCircleFill className='grey'/><BsCircleFill className='grey'/></button></div>

                    <div><h3>Gestion de redes sociales</h3><button><BsCircleFill className='circle'/><BsCircleFill className='circle'/><BsCircleFill className='grey'/><BsCircleFill className='grey'/><BsCircleFill className='grey'/></button></div>
                </div>

                <div className="icon">
                    <button className="btnCard">Técnica ISAK II</button>
                    <button className="btnCard">Maestria - US</button>
                    <button className="btnCard">Front End Dev</button>
                </div>
            </div>
        </section>
    )
}

export { SectionSkills }

