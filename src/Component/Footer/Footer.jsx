import React from "react";
import { IoGameController } from "react-icons/io5";
import { FaDiscord, FaInstagram, FaGithub , FaLinkedin} from "react-icons/fa";
import "./Style.css";

function Footer(){
    return(
        <div className="boxFooter">
            <div className="boxLogoFooter">
                <IoGameController size={25} />
                <h3 className="tileBox">
                    G A M E
                </h3>
            </div>
            <div className="boxDescFooter">
                <h3>2025 © G A M E, Desafio Include</h3>
            </div>
            <div className="boxIcons">
                <a className="boxLink">
                    <FaDiscord size={28} color="black"/>
                </a>
                <a className="boxLink">
                    <FaInstagram size={28} color="black"/>
                </a>
                <a className="boxLink">
                    <FaGithub size={28} color="black"/>
                </a>
                <a className="boxLink">  
                    <FaLinkedin size={28} color="black"/> 
                </a>
            </div>
        </div>
    );
}

export default Footer;