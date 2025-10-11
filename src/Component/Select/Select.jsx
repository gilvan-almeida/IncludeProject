import React from "react";
import './Style.css'
function Select({ label, options, valor, onChange }) {
    return (
        <div className="boxSelect">
            {label && <label>{label}</label>}
            <select value={valor} onChange={onChange} className="selectOption">
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;