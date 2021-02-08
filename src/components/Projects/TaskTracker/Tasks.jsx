import React, { Component } from 'react';
import Task from './Task';
import AddTask from './AddTask';

const myTasks = [
  {
    id: 1,
    text: "Shoping",
    date: "Feb 5th at 2:46pm",
    reminder: true,
    complete: false
  },
  {
    id: 2,
    text: "Brushing",
    date: "Feb 6th at 6:15pm",
    reminder: true,
    complete: false
  },
  {
    id: 3,
    text: "Walking",
    date: "Feb 7th at 6:40am",
    reminder: false,
    complete: true
  },
  {
    id: 4,
    text: "Something else",
    date: "Feb 7th at 6:40am",
    reminder: false,
    complete: true
  }
];

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: myTasks,
      showBtnTask: false
    };
  }

  getReminder = (id) => {
    const updatedTasks = this.state.tasks.map(task => task.id === id ? { id: task.id, text: task.text, date: task.date, complete: task.complete, reminder: !task.reminder } : task);
    this.setState({
      tasks: updatedTasks,
    });
  }

  addNewTask = (task) => {
    console.log(task);
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task)
      };
    });
  }

  deleteTasks = (id) => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });
  }

  showTaskAdd = () => {
    this.setState({ showBtnTask: !this.state.showBtnTask });
  }

  completeTask = (id) => {
    this.setState(prevState => {
      const updTasks = prevState.tasks.map(task => {
        if (task.id === id) {
          task.complete = !task.complete;
        }
        return task;
      });
      return {
        tasks: updTasks,
      };
    });
  }

  completedTasks = () => {
    return this.state.tasks.filter(task => task.complete);
  }

  render() {
    const cssStyle = {
      backgroundImage: 'linear-gradient(rgba(155,200,205,.1), rgba(255,255,255,.2)), url("' + this.props.image + '")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: "100vh"
    }

    return (
      <div className="page-top" style={cssStyle}>
        <div className="">
          <h1 style={{ textAlign: 'center', color: '#f7f7e8' }}>Personal Task Manager</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="tasks-wrapper">
                {this.completedTasks().map((task) => {
                  return <Task {...task} key={task.id} />;
                })}
              </div>
            </div>

            <div className="col-sm-12 col-lg-5">
              <div className="tasks-wrapper">
                {this.state.tasks.map((task) => {
                  if (!task.complete) {
                    return <Task {...task} completeTaskNow={this.completeTask} getReminder={this.getReminder} deleteTasks={this.deleteTasks} key={task.id} />;
                  } else {
                    return "";
                  }
                })}
                <div className="task-wrapper dashed" onClick={this.showTaskAdd}>
                  <div className="add-btn">ADD</div>
                </div>
              </div>
            </div>

              {this.state.showBtnTask && <AddTask addNewTask={this.addNewTask} key={Date.now()} />}
        </div>
      </div>

      </div>
    );
  }
}

export default Tasks;
