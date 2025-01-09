import React from 'react';

function About({object}) {
    return (
        <div>
            <h1>Title: {object.title}</h1>
            <h2>Body: {object.body}</h2>
        </div>
    );
}

export default About;