import React, { FormEvent, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useTodos } from "../context/TodosContext";

function Form() {

    const { todoList, addTodo} = useTodos();

    const [todo, setTodo] = useState<string>("");

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addTodo({
            id:  nanoid(),
            title: todo,
            isCompleted: false,
        },)        
        const listContainer = document.querySelector(".list-container") as HTMLDivElement;
        listContainer.style.overflowY = "visible";
        setTodo("");
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
        console.log(todoList);
    }, [todoList])

    return (
        <div className="form-container">
            <form onSubmit={handleFormSubmit} className="form-content">
                <input
                    autoFocus
                    type="text"
                    placeholder="Enter a todo..."
                    value={todo}
                    required
                    onChange={(event) => setTodo(event.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Form;
