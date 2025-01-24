import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import classes from './FormPage.module.css';

const FormPage = () => {
    const [users, setUsers] = useState([]);
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();

    const submit = (values) => {
        setUsers((prevUsers) => [...prevUsers, values]);
        reset();
    }

    const clearTable = () => {
        setUsers([]);
    }

    const deleteUser = (index) => {
        const deleteUser = users.filter((any, user) => user !== index)
        setUsers(deleteUser)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={classes.form}>
                <input
                    className={errors.name && classes.error}
                    placeholder="Name"
                    type="text"
                    {...register('name', { required: true })}
                />
                <input
                    className={errors.username && classes.error}
                    placeholder="Username"
                    type="text"
                    {...register('username', { required: true })}
                />
                <input
                    className={errors.email && classes.error}
                    placeholder="Email"
                    type="email"
                    {...register('email', { required: true })}
                />
                <input
                    className={errors.phone && classes.error}
                    placeholder="Phone"
                    type="tel"
                    {...register('phone', { required: true })}
                />
                <input
                    placeholder="Website"
                    type="url"
                    {...register('website', { required: false })}
                />
                <div className={classes.button_card}>
                    <Button type="submit" text="Create" />
                    <Button type="button" text="Clear All" onClick={clearTable} />
                </div>
            </form>

            {users.length === 0 ? (
                <p className={classes.nothing}>Таблица пуста</p>
            ) : (
                <div className={classes.user}>
                    <div className={classes.user_key}>
                        <p>Name</p>
                        <p>Username</p>
                        <p>Email</p>
                        <p>Phone</p>
                        <p>Website</p>
                        <p>Delete</p>
                    </div>
                    {users.map((user, index) => (
                        <div key={index} className={classes.user_info}>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.website}</p>
                            <button
                                type="button"
                                onClick={() => deleteUser(index)}
                                className={classes.delete_button}
                            >Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FormPage;