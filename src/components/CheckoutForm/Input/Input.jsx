import React from "react";
import "./Input.scss";

function Input({name, onChange, placeholder, onKeyDown, children}){


    return(
        <div className="inputContainer flexible--column">
            <label>{children}</label>
            <input className="input" type="text" name={name} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown}/>
        </div>
        
    );
}

export default Input;