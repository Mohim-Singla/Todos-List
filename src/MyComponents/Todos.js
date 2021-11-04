import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>
            {
                props.todo.length ?
                props.todo.map((item) => {
                    return (
                        <TodoItem todo={item} key={item.sno} onDelete={props.onDelete}/>
                    )
                }) : <p>No Todos to Display.</p>
            }
        </div>
    )
}
