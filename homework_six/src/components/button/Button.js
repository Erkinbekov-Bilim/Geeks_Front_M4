import React from 'react';
import classes from "./Button.module.css"

const Button = ({text,type,onClick}) => {
    return (
        <button className={classes.button} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;