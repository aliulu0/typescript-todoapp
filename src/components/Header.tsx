import React from 'react'
import Form from "./Form";
import Filter from "./Filter";

function Header() {
  return (
    <div className="header">
    <h1 onClick={() => window.location.reload()}>Todo App</h1>
    <Form />
    <Filter />
  </div>
  )
}

export default Header