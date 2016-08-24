import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todo = {
      title: e.target.title.value,
      body: e.target.body.value,
      done: false
    };
    e.target.title.value = "";
    e.target.body.value = "";
    this.props.createTodo(todo);
  }

  render() {
    return (
    <form onSubmit={ this.handleSubmit.bind(this) }>
      Title : <input type="text" name="title" />
      Body : <input type="text" name="body"/>
      <input type="submit" value="Submit"/>
    </form>
  );
  }
}

export default TodoForm;
