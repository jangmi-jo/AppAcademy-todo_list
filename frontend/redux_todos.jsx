import ReactDOM from 'react-dom';
import React from 'react';
import { fetchTodos } from './util/todo_api_util';
import configureStore from './store/store';
import allTodos from './reducers/selector';
import { requestTodos, createTodo } from './actions/todo_actions';
import Root from './components/root';

window.allTodos = allTodos;
const store = window.store = configureStore();
window.requestTodos = requestTodos;
window.createTodo = createTodo;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
