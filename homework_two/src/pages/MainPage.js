import React from 'react';
import About from '../components/About';
import Title from '../components/Title';


const object = {
    title: "Some Title",
    body: "Some body"
}

function MainPage() {
    return (
        <div>
            <About object={object}/>
            <Title text={"Hello World"}/>
        </div>
    );
}

export default MainPage;