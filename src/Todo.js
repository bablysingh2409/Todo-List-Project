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
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
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
          <div className="Todo-Buttons">
            <button onClick={this.handleRemove} className="Todo-btn-Delete">
              X
            </button>
            <button onClick={this.toggleForm} className="Todo-btn-Edit">
              Edit
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}
export default Todo;
