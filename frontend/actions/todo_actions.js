const TODO_CONSTANTS = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS",
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO"
};

const requestTodos = () => ({
  type: TODO_CONSTANTS.REQUEST_TODOS
});

const receiveTodos = todos => ({
  type: TODO_CONSTANTS.RECEIVE_TODOS,
  todos
});

const createTodo = (todo) => ({
  type: TODO_CONSTANTS.CREATE_TODO,
  todo
});

const receiveTodo = (todo) => ({
  type: TODO_CONSTANTS.RECEIVE_TODO,
  todo
});


export { TODO_CONSTANTS, requestTodos, receiveTodos, createTodo, receiveTodo };
