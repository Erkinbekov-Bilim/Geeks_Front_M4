import React from 'react';
import classes from "./Button.module.css";

const Button = ({onClick, text, disabled}) => {
    return (
        <button className={classes.button} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;