import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        id="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button id="btn" type="submit"> {editId ? "Save" : "Add"}</button>
    </form>
  );
};

export default TodoForm;