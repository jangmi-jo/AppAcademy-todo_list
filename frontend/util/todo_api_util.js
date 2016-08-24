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



export { fetchTodos, createTodo };
