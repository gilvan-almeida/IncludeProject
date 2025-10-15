import React, { useState } from "react";
import "./Style.css";

function NotaSelect({ value, onChange }) {
    const [selected, setSelected] = useState(value || null);

    const getColorByValue = (v) => {
        if (v <= 3) return "#f8a5a5";
        if (v <= 6) return "#fcdca4";
        return "#a7e6c2";
    };

    const handleClick = (v) => {
        setSelected(v);
        onChange && onChange(v);
    };

    return (
        <div className="notaBar">
            {[...Array(10)].map((_, i) => {
                const v = i + 1;
                return (
                    <div
                        key={v}
                        className={`notaBloco ${selected === v ? "ativo" : ""}`}
                        style={{ backgroundColor: getColorByValue(v) }}
                        onClick={() => handleClick(v)}
                    />
                );
            })}
        </div>
    );
}

export default NotaSelect;
