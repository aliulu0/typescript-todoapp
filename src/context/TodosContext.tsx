import React, { useState, createContext, useContext } from "react";
import { ITodo, TodoContextType } from '../interfaces/Todonterfaces';

const contextDefaultValues: TodoContextType = {
    todoList: [],
    filteredList: [],
    addTodo: () => { },
    deleteTodo: () => { },
    editTodo: () => { },
    completeTodo: () => { },
    filteredTodoList: () => { },
    clearTodoList: () => { },
}

interface Props {
    children: React.ReactNode;
}

const TodosContext = createContext<TodoContextType>(contextDefaultValues);

export const TodosProvider: React.FC<Props> = ({ children }) => {

    const [todoList, setTodoList] = useState<ITodo[] | []>(() => {
        const todosValues = localStorage.getItem("todos");
        return todosValues ? JSON.parse(todosValues) : [];
    });
    const [filteredList, setFilteredList] = useState<ITodo[] | []>([]);

    const addTodo = (newTodo: ITodo) => {
        setTodoList((todos) => [newTodo, ...todos]);
    };

    const deleteTodo = (id: string) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };

    const editTodo = (id: string, editValue: string) => {
        setTodoList(
            todoList.map((item) => {
              if (item.id === id) {
                return { ...item, title: editValue };
              }
              return item;
            })
          );
    };

    const completeTodo = (id: string) => {
        setTodoList(
            todoList.map((item) => {
                if (item.id === id) {
                    return { ...item, isCompleted: !item.isCompleted };
                }
                return item;
            })
        );
    };

    const filteredTodoList = (selected: string) => {
        switch (selected) {
            case "Active":
                setFilteredList(todoList.filter((todo) => todo.isCompleted === false));
                break;
            case "Completed":
                setFilteredList(todoList.filter((todo) => todo.isCompleted === true));
                break;
            default:
                setFilteredList(todoList);
                break;
        }
    };

    const clearTodoList = () => {
        setTodoList([]);
    };
    
    const values = {
        todoList,
        addTodo,
        deleteTodo,
        editTodo,
        completeTodo,
        filteredList,
        filteredTodoList,
        clearTodoList,
    }

    return <TodosContext.Provider value={values} >{children}</TodosContext.Provider>

}

export const useTodos = () => useContext(TodosContext)