import React from 'react';
import { useState, useEffect } from 'react';
import MainPage from '../mainPage/MainPage';
import ErrorPage from '../errorPage/ErrorPage';

function UserPage() {

    const [user, setUser] = useState({})
    const [isPrompt, setIsPrompt] = useState(false)

    useEffect(() => {
        if (!isPrompt) {
            const name = prompt("Как тебя зовут?");
            const surname = prompt("Какая у тебя фамилия?");
            setUser({name, surname})
            setIsPrompt(true)
        }
    }, [isPrompt])



    return (
        <div>
            {user.name === "John" && user.surname ==="Johns" ? <MainPage data={user}/> : <ErrorPage data={user}/>}
        </div>
    );
}

export default UserPage;