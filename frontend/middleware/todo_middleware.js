import { TODO_CONSTANTS, receiveTodos, receiveTodo } from '../actions/todo_actions';
import { fetchTodos, createTodo } from '../util/todo_api_util';

const TodoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case TODO_CONSTANTS.REQUEST_TODOS:
      const fetchSuccess = (data) => (store.dispatch(receiveTodos(data)));
      fetchTodos(fetchSuccess);
      break;
    case TODO_CONSTANTS.CREATE_TODO:
      const createSuccess = (data) => (store.dispatch(receiveTodo(data)));
      createTodo(action.todo, createSuccess);
      break;
    default:
      next(action);
  }
};

export default TodoMiddleware;
