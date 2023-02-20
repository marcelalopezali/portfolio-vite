import React from 'react';
import './SectionContent.css';
import {BsChevronDoubleLeft} from 'react-icons/bs';
import {BsChevronDoubleRight} from 'react-icons/bs';

const SectionContent = () => {
    return(
        <section>
            <div className="content">
                <h3><BsChevronDoubleLeft className="left"/>good <span>food</span>, good <span>mood</span><BsChevronDoubleRight className="left"/></h3>
                <button className="btnCard"><a href="#form">escribime</a></button>
            </div>
        </section>
    )
}

export { SectionContent }