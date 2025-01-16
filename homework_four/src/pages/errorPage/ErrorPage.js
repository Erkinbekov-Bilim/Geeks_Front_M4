import React, {useEffect, useState} from 'react';

const ErrorPage = ({data}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(data)
    }, [data]);

    return (
        <div>
            <p>Тебе сюда нельзя {user.name} {user.surname}</p>
        </div>
    );
};

export default ErrorPage;