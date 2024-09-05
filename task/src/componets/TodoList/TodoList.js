import React, { Component } from 'react'

const TodoList=(props)=>{
    const {toDoList,deleteUser}=props;
    const {title,id}=toDoList;
    const deleteTodo=()=>{
        deleteUser(id);

    }
    return(
        <div>
            <h2>{title}</h2>
            <button onClick={deleteTodo}>deleted</button>
        </div>
    )
}

export default TodoList
