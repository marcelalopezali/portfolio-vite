import React, {useState} from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from "react-icons/gi"
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState (false)

    return(
        <header>
            <section className="nav" id="nav">
                <div className="logoLetra">
                    <h5>LOPEZ ALI <span className="spanUno">NUTRICIÓN</span></h5>
                </div>
                <div className={`items ${isOpen && "open"}`}>
                    <a href="#aboutMe">about me</a>
                    <a href="#boxWorks">works</a>
                    <a href="#form">contact</a>
                    <h3 className="hambur"> <GiHamburgerMenu/> </h3>     
                </div>
                <div className="redes">
                    <a href="https://www.instagram.com/nutrimali/" target="_blank" className="ig"><BsInstagram/></a>
                    <a href="https://ar.linkedin.com/in/marcelalopezali" target="_blank" className="ig"><BsLinkedin/></a>
                </div>
                <div className={`navToggle ${isOpen && "open"}`} onClick = { ()=> setIsOpen(!isOpen)} >
                    <span></span>
                    <span></span>
                    <span></span> 
                </div>

            </section>
    </header>
    
    )
}

export { Navbar }

/*
<div class="mode">
<input type="checkbox" id="checkitem" onclick="enableDarkMode()"/>
</div> */