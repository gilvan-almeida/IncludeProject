import React from "react";
import { IoGameController } from "react-icons/io5";
import { FaDiscord, FaInstagram, FaGithub , FaLinkedin} from "react-icons/fa";
import "./Style.css";

function Footer(){
    return(
        <div className="boxFooter">
            <div className="boxLog">
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
                    <FaDiscord size={20} color="#ffffff"/>
                </a>
                <FaInstagram size={20}/>
                <FaGithub size={20}/>
                <FaLinkedin size={20}/>
            </div>
        </div>
    );
}

export default Footer;