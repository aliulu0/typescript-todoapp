import React, { useState } from 'react'
import { ITodo } from "../interfaces/Todonterfaces";
import { AiFillDelete, AiFillCheckCircle } from "react-icons/ai";
import { FaEdit, FaSave } from "react-icons/fa";
import { useTodos } from "../context/TodosContext";

interface Props {
  todo: ITodo;
}

const ListItem: React.FC<Props> = ({ todo }) => {
  const { completeTodo, editTodo, deleteTodo } = useTodos();
  const [isEdit, setIsEdit] = useState(false);
  const [todoEditValue, setTodoEditValue] = useState(todo.title || "");

  const handleComplete = (id: string) => {
    completeTodo(id);
  };
  const handleOnEdit = () => {
    setIsEdit(true);
  };


  const handleDeledeTodo = (id: string) => {
    deleteTodo(id)
  };

  const handleSave = (id: string, editValue: string) => {
    setIsEdit(false);
    if (editValue === "") {
      setTodoEditValue(todo.title);
    } else {
      editTodo(id, editValue);
    }
  };

  return (
    <>
      <li className="list-content" key={todo.id}>
        <div className="list-text">
          <button
            id="complete"
            disabled={isEdit}
            onClick={() => handleComplete(todo.id)}
          >
            <AiFillCheckCircle
              id="check"
              className={`${isEdit ? "item disabled" : "item"}`}
              color={`${isEdit || todo.isCompleted ? "" : "green"}`}
            />
          </button>
          {isEdit ? (
            <input
              className="list-todo-text"
              type="text"
              value={todoEditValue}
              onChange={(event) => setTodoEditValue(event.target.value)}
              autoFocus
            />
          ) : (
            <label>
              <input
                className={`list-todo-text ${todo.isCompleted ? "completed" : ""
                  }`}
                type="text"
                value={todo.title}
                readOnly
              />
            </label>
          )}
        </div>
        <div className="list-settings">
          {isEdit ? (
            <button
              id="save"
              disabled={todo.isCompleted}
              onClick={() => handleSave(todo.id, todoEditValue)}
            >
              <FaSave className="item" color="#e9bf02" />
            </button>
          ) : (
            <button
              id="edit"
              disabled={todo.isCompleted}
              onClick={handleOnEdit}
            >
              <FaEdit
                className={`${todo.isCompleted ? "item disabled" : "item"}`}
                color={`${!todo.isCompleted ? "#e9bf02" : ""}`}
              />
            </button>
          )}
          <AiFillDelete
            className="item"
            color="#e43500"
            onClick={() => handleDeledeTodo(todo.id)}
          />
        </div>
      </li>
    </>
  )
}

export default ListItem