import { TODO_CONSTANTS, receiveTodos, receiveTodo, removeTodo } from '../actions/todo_actions';
import { fetchTodos, createTodo, updateTodo, destroyTodo } from '../util/todo_api_util';

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
    case TODO_CONSTANTS.TOGGLE_TODO:
      const updateSuccess = (data) => (store.dispatch(receiveTodo(data)));
      updateTodo(action.todo, updateSuccess);
      break;
    case TODO_CONSTANTS.DESTROY_TODO:
      const destroySuccess = (data) => (store.dispatch(removeTodo(data)));
      destroyTodo(action.todo, destroySuccess);
      break;
    default:
      next(action);
  }
};

export default TodoMiddleware;
