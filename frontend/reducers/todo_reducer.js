import { TODO_CONSTANTS } from '../actions/todo_actions';
import merge from 'lodash/merge';

const defaultState = {
  "1": {
    id: 5,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 6,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};


const TodosReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case TODO_CONSTANTS.RECEIVE_TODOS:
      let todos = {};
      action.todos.forEach((el) => {todos[el.id] = el;});
      return todos;
    case TODO_CONSTANTS.RECEIVE_TODO:
      let newState = merge({}, oldState);
      newState[action.todo.id] = action.todo;
      return newState;
    case TODO_CONSTANTS.REMOVE_TODO:
      let newRemoveState = {};
      Object.keys(oldState).forEach(id => {
        if (id !== action.todo.id.toString()) {
          newRemoveState[id] = oldState[id];
        }
      });
      return newRemoveState;
    default:
      return oldState;
  }
};

export default TodosReducer;
