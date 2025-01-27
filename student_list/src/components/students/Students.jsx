import React, { useState } from 'react';
import classes from './Students.module.scss';

function Students({ user, updateStudent, deleteStudent }) {
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({
        name: user.name,
        surname: user.surname
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        alert("Вы отредактировали студента");
        updateStudent(user.id, formData);
        setEditingUser(null);
    };

    const handleDelete = () => {
        alert("Вы удалил студента");
        deleteStudent(user.id);
    };

    const handleEditClick = () => {
        setEditingUser(user.id);
    };

    return (
        <div className={classes.container}>
            <ul className={classes.list}>
                <li>
                {editingUser === user.id ? (
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                        />
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setEditingUser(null)}>Cancel</button>
                    </div>
                ) : (
                    <div className={classes.student}>
                        <div className={classes.student_info}>
                            <p>Name {user.name}</p>
                            <p>Surname {user.surname}</p>
                            <p>Group {user.group_id}</p>
                        </div>
                        <button onClick={handleEditClick}>Редактировать</button>
                        <button onClick={handleDelete}>Удалить</button>
                    </div>
                )}
                </li>
            </ul>
        </div>
    );
}

export default Students;
