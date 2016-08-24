import ReactDOM from 'react-dom';
import React from 'react';
import { fetchTodos } from './util/todo_api_util';
import configureStore from './store/store';
import allTodos from './reducers/selector';
import { requestTodos } from './actions/todo_actions';

window.allTodos = allTodos;
window.store = configureStore();
window.requestTodos = requestTodos;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>It worked</h1>, root);
});
