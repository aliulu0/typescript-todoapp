/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useTodos } from "../context/TodosContext";

function Filter() {
    const { todoList, clearTodoList, filteredTodoList} = useTodos();
    const [selected, setSelected] = useState("All");

    const uncompleted = todoList.filter((todo) => todo.isCompleted === false);
    
    const handleFilter = () => {
        filteredTodoList(selected)
    };
    const handleClear = () => {
        clearTodoList()
        const listContainer = document.querySelector(".list-container") as HTMLDivElement;
        listContainer.style.overflowY = "hidden";
    };
    const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget.name;
        setSelected(button);        
    };
    
      useEffect(() => {
        handleFilter()
      },[todoList,selected]);


  return (
    <div className="filter-container">
      <div className="filter-content">
        <strong>
          {uncompleted.length > 0 && <span>{`${uncompleted.length} uncompleted ${uncompleted.length > 1 ? "items left" : "item left"}`}</span>}
        </strong>
        {todoList.length > 1 && (
          <div className="clear" onClick={handleClear}>
            <h4>Clear All</h4>
          </div>
        )}
      </div>

      <div className="filter-control">
        <div onClick={handleFilter}>
          <button
            className="filter-button"
            name="All"
            onClick={handleSelect}
          >
            All
          </button>
        </div>
        <div onClick={handleFilter}>
          <button
            className="filter-button"
            name="Active"
            onClick={handleSelect}
          >
            Active
          </button>
        </div>
        <div onClick={handleFilter}>
          <button
            className="filter-button"
            name="Completed"
            onClick={handleSelect}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter