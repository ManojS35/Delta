import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    let [todos, setTodos] = useState([{task:'Sample Task', id:uuidv4(), isDone : false}])
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        // console.log('new task is added');
        if(newTodo != "") {  // !todos.includes(newTodo)
            setTodos((prevTodo) => {
                return [...prevTodo, {task:newTodo, id:uuidv4(), isDone : false}]
            });
        }
        setNewTodo('');
    }

    let updateTask = (event) => {
        // console.log('task is changed')
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id))
    }

    let markAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    // task : todo.task.toUpperCase(),
                    isDone : true
                }
            })
        )
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        // task : todo.task.toUpperCase(),
                        isDone : true
                    }
                } else {
                    return todo
                }
            })
        )
    }
    return (
        <div>
            <input placeholder="Add a task" value={newTodo} style={{width:300, height:40, borderRadius:14}} onChange={updateTask}/>
            <br />
            <button onClick={addTask}>Add Task</button>
            <br /><br /><br /><br />
            <hr />
            <h3>Task List</h3>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span style={todo.isDone ? {textDecorationLine : "Line-through"} : {}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
                </li>
            ))}
            <button onClick={markAllDone}>Mark all as done</button>
        </div>
    )
}