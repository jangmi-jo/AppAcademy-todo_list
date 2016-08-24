import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.requestTodos();
  }

  render(){
    const todosTitles = this.props.todos.map((item) => (
      <TodoListItem key={item.id} item={item} />
    ));

    return(
      <div>
        <ul>
          {todosTitles}
        </ul>
        <TodoForm createTodo= { this.props.createTodo }  />
      </div>
    );
  }
}


export default TodoList;
