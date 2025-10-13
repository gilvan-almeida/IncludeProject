import React from "react";
import './Style.css'
function ButtonComponent({title, color, height, width, onClick}){
    return(
        <div className="boxButton" 
            onClick={onClick}
            style={{
                height:height, 
                width:width, 
                backgroundColor: color}}>           
            <h3 className="textButton">{title}</h3>
        </div>
    )
}

export default ButtonComponent;