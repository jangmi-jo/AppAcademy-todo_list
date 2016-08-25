const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};

const createTodo = (todo, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: { todo },
    success,
    error
  });
};

const updateTodo = (todo, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/todos/${todo.id}`,
    data: { todo },
    success,
    error
  });
};

const destroyTodo = (todo, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo.id}`,
    success,
    error
  });
};



export { fetchTodos, createTodo, updateTodo, destroyTodo };
