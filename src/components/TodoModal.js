import React, { useState } from 'react'
import { useTodo } from "../context/todo-context"

const TodoModal = ({ setShowModal }) => {
    const [todo, setTodo] = useState("");
    const { todoList, addTodoHandler, todoCheckHandler, deleteTodoHandler } = useTodo();

    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            addTodoHandler(todo)
            setTodo("")
        }
    }
    const checkboxHandler = (todo) => {
        todoCheckHandler(todo)
    }

    const deleteHandler = (id) => {
        deleteTodoHandler(id)
    }
    return (
        <div className='absolute bottom-10 right-3 z-5 bg-transparent'>
            <div className='flex justify-between'>
                <p>Todo</p>
                <button
                    onClick={() => setShowModal(false)}>
                    <span class="material-icons">
                        close
                    </span>
                </button>
            </div>
            <div className='flex flex-col'>
                {todoList?.map(todo =>
                    <div className='flex justify-between'>
                        <label className={`${todo.isComplete && "line-through"}`}>
                            <input
                                type="checkbox"
                                checked={todo?.isComplete} onChange={() => checkboxHandler(todo)}
                                className="bg-transparent border-b text-center mr-2  text-1xl focus:outline-none py-3"
                            />
                            {todo.task}
                        </label>
                        <button onClick={() => deleteHandler(todo.id)}>
                            <span class="material-icons">
                                cancel
                            </span>
                        </button>
                    </div>)}
            </div>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={keyDownHandler}
                placeholder="Add todo"
                className="bg-transparent border-b text-center text-2xl focus:outline-none py-2"
            />
        </div>
    )
}

export { TodoModal }