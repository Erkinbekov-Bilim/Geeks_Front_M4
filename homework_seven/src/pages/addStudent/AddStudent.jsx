import React, { useEffect, useState } from 'react';
import classes from './AddStudent.module.scss';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
function AddStudent() {

    const [students, setStudents] = useState([]);
    console.log(students, 'students');
    

    const getStudentsWithFetch = async (API) => {
        const response = await fetch(`${BASE_URL}/${API}`);
        const data = await response.json();
        return data
    }

    const postStudentsWithFetch = async (API) => {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: students.length === 0 ? '1' : String(Number(students[students.length - 1].id) + 1),
                surname: 'Sariev',
                name: 'Baktybek',
                groupId: 4
            })
        }
        
        const response = await fetch(`${BASE_URL}/${API}`, option);
        console.log(response, 'post');
        getStudentsWithFetch('student').then(data => setStudents(data));
    }

    // Axios
    
    const postStudentsWithAxios = async (API) => {

        const post_object = {
            id : students.length === 0 ? '1' : String(Number(students[students.length - 1].id) + 1),
            surname: 'Ali',
            name: 'Timur',
            groupId: 4
        }

        const response = await axios.post(`${BASE_URL}/${API}`, post_object);
        console.log(response.data, 'postAxios');
        getStudentsWithFetch('student').then(data => setStudents(data));
    }

    const putStudentsWithAxios = async (API, id) => {
        const put_object = {
            id,
            surname: 'Iliyev',
            name: 'Gulzat',
            groupId: 4
        }

        const response = await axios.put(`${BASE_URL}/${API}/${id}`, put_object);

        console.log(response.data, 'putAxios');
        getStudentsWithFetch('student').then(data => setStudents(data));
    }

    const patchStudentsWithAxios = async (API, id) => {
        const patch_object = {
            surname: 'Kuban',
        }

        const response = await axios.patch(`${BASE_URL}/${API}/${id}`, patch_object);

        console.log(response.data, 'patchAxios');
        getStudentsWithFetch('student').then(data => setStudents(data));
    }

    const deleteStudentsWithAxios = async (API, id) => {
        const response = await axios.delete(`${BASE_URL}/${API}/${id}`);
        console.log(response.data, 'deleteAxios');
        getStudentsWithFetch('student').then(data => setStudents(data));
    }

    const getStudentsWithAxios = async (API) => {
        const response = await axios(`${BASE_URL}/${API}`);
        console.log(response.data, 'axios');
    }

    useEffect(() => {
        getStudentsWithFetch('student').then(data => setStudents(data));
        getStudentsWithAxios('student');
    }, []);


    return (
        <div className={classes.wrapper}>
            <button onClick={() => postStudentsWithFetch('student')}>POST</button>
            <button onClick={() => postStudentsWithAxios('student')}>POST AXIOS</button>
            <button onClick={() => putStudentsWithAxios('student', 2)}>PUT AXIOS</button>
            <button onClick={() => patchStudentsWithAxios('student', 1)}>PATCH AXIOS</button>
            {students?.map((student, key) => <div className={classes.student} key={key}>
                <p>Id: {student.id}</p>
                <p>Name: {student.name}</p>
                <p>Surname: {student.surname}</p>
                <button onClick={() => deleteStudentsWithAxios('student', student.id)}>DELETE</button>
            </div>)}
        </div>
    );
}

export default AddStudent;