import { TODO_CONSTANTS, receiveTodos } from '../actions/todo_actions';
import fetchTodos from '../util/todo_api_util';

const TodoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case TODO_CONSTANTS.REQUEST_TODOS:
      const success = (data) => (store.dispatch(receiveTodos(data)));
      fetchTodos(success);
      break;
    default:
      next(action);
  }
};

export default TodoMiddleware;
