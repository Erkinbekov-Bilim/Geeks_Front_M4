import React from 'react';
import classes from "./Input.module.css";

const Input = ({type = "text", onChangeInput, placeholder, value}) => {
    return (
        <div>
            <input className={classes.input} type={type} onChange={onChangeInput} placeholder={placeholder} value={value}/>
        </div>
    );
};

export default Input;