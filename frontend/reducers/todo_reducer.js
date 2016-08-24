import { TODO_CONSTANTS } from '../actions/todo_actions';

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
    default:
      return oldState;
  }
};

export default TodosReducer;
