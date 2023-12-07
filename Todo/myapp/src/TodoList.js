import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ol className="allTodos">
      {todos.map((t) => (
        <li className="list">
          <span className="todoText" key={t.id}>
          {t.todo}
          </span>
          <button class="edit" onClick={() => handleEdit(t.id)}>Edit</button>
          <button class="delete" onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ol>
  );
};

export default TodoList;