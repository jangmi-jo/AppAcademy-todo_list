import { combineReducers } from 'redux';
import TodosReducer from './todo_reducer';

const RootReducer = combineReducers({
  todos: TodosReducer
});

export default RootReducer;
