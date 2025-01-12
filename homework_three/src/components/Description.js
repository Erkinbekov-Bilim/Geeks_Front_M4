import React from 'react';
import classes from './styles/Description.module.css';


function Description({obj}) {
    return (
        <div className={classes.description}>
            <h1>{obj.title}</h1>
            <p>{obj.description}</p>
        </div>
    );
}

export default Description;