import React from 'react';
import Todo from '../components/Todo';
import classes from './styles/TodosPage.module.css';

function TodosPage(props) {
    
    const todos = ["todo 1", "todo 2", "todo 3"]

    return (
        <div className={classes.todos}>
            {todos.map((todo, index) => <Todo key={index} text={todo}/>)}
        </div>
    );
}

export default TodosPage;