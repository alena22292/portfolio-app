import React, { Component } from 'react';

class Task extends Component {
  icons = (boolean) => {
    if (!boolean) {
      return <div className="icons">
        <i className="fas fa-trash-alt mr-2" onClick={() => this.props.deleteTasks(this.props.id)}></i>
        <i className="fas fa-stopwatch mr-2" onClick={() => this.props.getReminder(this.props.id)}></i>
        <input type="checkbox"
          // checked={!this.props.complete}
          onChange={(e) => {
            this.props.completeTaskNow(this.props.id);
          }} />

      </div>;
    } else {
      return '';
    }
  }
  render() {
    return (
      <div className={`${this.props.reminder && !this.props.complete ? "task-wrapper reminder" : "task-wrapper"}`}>
        <div className="display-flex-between">
          <h3>{this.props.text}</h3>
          {this.icons(this.props.complete)}
        </div>
        <p>{this.props.date}</p>
      </div>
    );
  }
}

export default Task;
