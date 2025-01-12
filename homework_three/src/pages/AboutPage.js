import React from 'react';
import Description from '../components/Description';



function AboutPage(props) {

    const obj = {
        title: "Title 2", 
        description: "description 2"
    }
    
    return (
        <div>
            <Description obj={obj}/>
        </div>
    );
}

export default AboutPage;