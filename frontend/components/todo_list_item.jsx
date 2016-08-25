import React from 'react';

const TodoListItem = ({item, toggleTodo, destroyTodo}) => {
  let buttonText = (item.done) ? "Cancel Mark" : "Completed!";
  let toggleHandler= () => {
    item.done = !item.done;
    toggleTodo(item);
  };

  let destroyHandler= () => {
    destroyTodo(item);
  };

  return (
    <li>
      {item.title}
      <button onClick={toggleHandler}>{buttonText}</button>
      <button onClick={destroyHandler}>Delete Item</button>
    </li>
  );
};

export default TodoListItem;
