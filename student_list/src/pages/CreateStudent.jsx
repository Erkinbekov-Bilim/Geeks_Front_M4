import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Students from '../components/students/Students';
import classes from '../pages/CreateStudent.module.scss';

const BASE_URL = 'http://localhost:5000/users';

function CreateStudent() {
    const [students, setStudents] = useState([]);

    const [newStudent, setNewStudent] = useState({
        name: '',
        surname: '',
        group_id: ''
});

    const getStudentsAxios = async () => {
        try {
            const response = await axios.get(BASE_URL);
            setStudents(response.data);
        } catch (error) {
            console.error('Ошибка загрузки данных:', error);
        }
    };

    useEffect(() => {
        getStudentsAxios();
    }, []);

    const inputChange = (event) => {
        const { name, value } = event.target;
        setNewStudent({
            ...newStudent,
            [name]: value
        });
    };

    const createStudent = async (event) => {
        event.preventDefault();
        try {

            await axios.post(BASE_URL, newStudent);
            setNewStudent({
                name: '',
                surname: '',
                group_id: ''
            });
            getStudentsAxios();
            alert('Студент успешно создан');
        } catch (error) {
            console.error('Ошибка при создании студента:', error);
        }
    };

    const updateStudent = async (id, updatedData) => {
        try {
            await axios.patch(`${BASE_URL}/${id}`, updatedData);
            getStudentsAxios();
        } catch (error) {
            console.error('Ошибка при обновлении данных студента:', error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            getStudentsAxios();
        } catch (error) {
            console.error('Ошибка при удалении студента:', error);
        }
    };

    return (
        <div className={classes.container}>
            <form onSubmit={createStudent} className={classes.form}>
                <input
                    type="text"
                    name="name"
                    onChange={inputChange}
                    value={newStudent.name}
                    placeholder="Имя"
                />
                <input
                    type="text"
                    name="surname"
                    onChange={inputChange}
                    value={newStudent.surname}
                    placeholder="Фамилия"
                />
                <input
                    type="number"
                    name="group_id"
                    onChange={inputChange}
                    value={newStudent.group_id}
                    placeholder="Группа"
                />
                <button type="submit">Create</button>
            </form>
            <div className={classes.list}>
                {students.map((student) => (
                    <Students key={student.id} user={student} updateStudent={updateStudent} deleteStudent={deleteStudent}/>
                ))}
            </div>
        </div>
    );
}

export default CreateStudent;
