import React from 'react';

export const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className={`todo ${todo.isCompleted ? 'completed' : ''}`}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">{todo.category}</p>
      </div>
      <div>
        <button 
          className="complete" 
          onClick={() => completeTodo(todo.id)}
        >
          {todo.isCompleted ? 'Desfazer' : 'Completar'}
        </button>
        <button 
          className="remove" 
          onClick={() => removeTodo(todo.id)}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Todo;
