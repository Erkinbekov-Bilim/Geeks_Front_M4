import React from 'react';
import Description from '../components/Description';


function MainPage(props) {
    
    const obj = {
        title: "Title", 
        description: "description"
    }

    return (
        <div>
            <Description obj={obj}/>
        </div>
    );
}

export default MainPage;