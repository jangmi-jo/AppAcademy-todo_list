const TODO_CONSTANTS = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS"
};

const requestTodos = () => ({
  type: TODO_CONSTANTS.REQUEST_TODOS
});

const receiveTodos = todos => ({
  type: TODO_CONSTANTS.RECEIVE_TODOS,
  todos
});

export { TODO_CONSTANTS, requestTodos, receiveTodos };
