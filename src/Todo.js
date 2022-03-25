import React, { Component } from 'react';
import TodoList from './TodoList';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  handleChange(evt) {
    this.setState({
      task: evt.target.value,
    });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.task} onChange={this.handleChange} />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <button onClick={this.handleRemove}>
            <i className="fas-fa pen" />
          </button>
          <button onClick={this.toggleForm}>
            <i className="fas-fa trash" />
          </button>
        </div>
      );
    }
    return result;
  }
}
export default Todo;
