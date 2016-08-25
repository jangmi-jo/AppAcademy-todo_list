import React from 'react';

const TodoDetailView = ({item, destroyHandler}) => (
  <p>
    {item.body}
    <button onClick={destroyHandler}>Delete Item</button>
  </p>
);

export default TodoDetailView;
