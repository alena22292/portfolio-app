import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      date: '',
      reminder: false,
      complete: false
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.text) {
      alert("Please add a task");
      return;
    }

    this.props.addNewTask({ id: Date.now(), text: this.state.text, date: this.state.date, reminder: this.state.reminder, complete: false });

    this.setState({ text: '', date: '', reminder: false });
  }

  render() {
    return (
      <div className="col-sm-12 col-lg-4">
        <form className="form-add" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="form-label">Task</label>
            <input
              type="text"
              className="form-control"
              placeholder="Add new task"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date and Time</label>
            <input
              type="text"
              className="form-control"
              placeholder="Add date and time"
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
            />
          </div>
          <div className="form-check mt-3 mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={this.state.reminder}
              value={this.state.reminder}
              onChange={(e) => this.setState({reminder: e.currentTarget.checked})}
            />
            <label className="form-check-label">Set Reminder</label>
          </div>

          <input className="my-btn" type="submit" value="Save Task" />
        </form>
      </div>
    );
  }
}

export default AddTask;
