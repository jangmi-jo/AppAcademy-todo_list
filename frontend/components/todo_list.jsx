import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.requestTodos();
  }

  render(){
    const todosTitles = this.props.todos.map((item) => (
      <TodoListItem key={item.id} item={item} />
    ));

    return(
      <ul>
        {todosTitles}
      </ul>
    );
  }
}


export default TodoList;
