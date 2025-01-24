import React, {useState} from 'react';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import classes from "./UserPage.module.css";
import Users from "../../components/users/Users";

const UserPage = () => {
    const [input, setInput] = useState("")
    const [users, setUsers] = useState([])
    const [currentUserEdit, setCurrentUserEdit] = useState(null)
    const [disabledButton, setDisabledButton] = useState(true)
    const getUserName = (event) => {
        const {value} = event.target
        setInput(value)
        setDisabledButton(value.trim() === '')
    }

    console.log(users)

    const addUser = () => {
        setUsers(prev => [...prev, {
            id: users.length + 1,
            name: input
        }])
        console.log(users)
        setInput("")
        setDisabledButton(true)
    }



    return (
        <div className={classes.user}>
            <Input placeholder={"Введите свое имя"} onChangeInput={getUserName} value={input}/>
            <Button text={"Добавить"} onClick={addUser} disabled={disabledButton}/>
            {users.length === 0
                ?
                <div>
                    <p>Список пуст</p>
                </div>
                :
                <div className={classes.user_card}>
                    {users.map((user) => <Users
                        input={input}
                        user={user} key={user.id}
                        currentUserEdit={setCurrentUserEdit}
                        isEdit = {currentUserEdit === user.id}/>)}
                </div>
            }
        </div>
    );
};

export default UserPage;