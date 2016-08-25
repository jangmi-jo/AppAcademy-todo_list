import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      detail: false
    };
  }

  toggleHandler() {
    this.props.item.done = !this.props.item.done;
    this.props.toggleTodo(this.props.item);
  }

  destroyHandler() {
    this.props.destroyTodo(this.props.item);
  }

  toggleDetail() {
    this.setState({
      detail: !this.state.detail
    });
  }

  render() {
    let buttonText = (this.props.item.done) ? "Cancel Mark" : "Completed!";
    let details = "";
    if (this.state.detail) {
      details = <TodoDetailView item={this.props.item}
            destroyHandler={this.destroyHandler.bind(this)}/>;
      }
    return (
      <li>
        <span onClick={this.toggleDetail.bind(this)}>{this.props.item.title}</span>
        <button onClick={this.toggleHandler.bind(this)}>{buttonText}</button>
          {details}
      </li>
    );
  }
}

export default TodoListItem;
