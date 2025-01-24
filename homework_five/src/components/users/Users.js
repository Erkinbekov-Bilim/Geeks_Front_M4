import React, {useState} from 'react';
import classes from "./Users.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

const Users = ({user, currentUserEdit, isEdit}) => {

    const [input, setInput] = useState(user.name)
    const [disabledButton, setDisabledButton] = useState(true)
    const userEdit= (editUser) => {
        if (user.id === editUser.id){
            user.name = editUser.name
        }
        currentUserEdit(false)
    }

    const getEditedUserName = (event) => {
        const {value} = event.target
        setInput(value)
        setDisabledButton(value.trim() === '')
    }

    if (isEdit) {
        return (
            <div className={classes.user_card}>
                <Input
                    placeholder={"Введите измененное имя"}
                    value={input}
                    onChangeInput={getEditedUserName}/>
                <Button disabled={disabledButton} text={"Сохранить"} onClick={() => userEdit({
                    ...user, name: input
                })}/>
            </div>
        )
    }

    return (
        <div className={classes.user_card}>
            <div className={classes.user_info}>
                <p>{user.id}.</p>
                <p>{user.name}</p>
                <Button text={"Изменить"} onClick={() => currentUserEdit(user.id)}/>
            </div>
        </div>
    );
};

export default Users;