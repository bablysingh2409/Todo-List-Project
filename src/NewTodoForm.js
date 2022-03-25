import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import TodoList from './TodoList';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      task: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuidv4(), completed: false };
    this.props.createTodo(newTodo);
    this.setState({
      task: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <label htmlFor="task">New Todo</label>
        <input
          id="task"
          placeholder="New Todo"
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
