const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};
// window.fetchTodos = fetchTodos;

export default fetchTodos;
