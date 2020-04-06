import React from 'react';
import Task from './components/Task';
import Input from './components/Input';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      tasks: localStorage.getItem('to-do-list') === null ?
      [] : JSON.parse(localStorage.getItem('to-do-list'))
    }

  }

  addTask = input => {
    let tasks = [...this.state.tasks];
    tasks.push({id: tasks.length, title: input, done: false});
    this.setState({
      tasks: tasks
    });
  }

  doneTask = id => {
    let i = this.state.tasks.map(el => el.id).indexOf(id);
    let tasks = [...this.state.tasks];
    tasks[i].done ? tasks[i].done = false : tasks[i].done = true;
    this.setState({
      tasks: tasks
    });
  }

  deleteTask = id => {
    let i = this.state.tasks.map(el => el.id).indexOf(id);
    let tasks = [...this.state.tasks];
    tasks.splice(i,1);
    this.setState({
      tasks: tasks
    });
  }

  clearAll = () => {
    this.setState({
      tasks: []
    });
  }

  render(){

    localStorage.setItem('to-do-list', JSON.stringify(this.state.tasks));

    const tasks  = [...this.state.tasks];
    const activeTasks = tasks.filter(el => !el.done);
    const doneTasks = tasks.filter(el => el.done);

    return (
      <div className="todo">
        <div className="todo_header">
            <h2>Active tasks : {activeTasks.length}</h2>
            <button onClick={() => this.clearAll()}>Clear all</button>
        </div>
        <div className="todo_list">
            <ul>
              {[...activeTasks, ...doneTasks].map((el, i) => 
                <Task
                  i={i}
                  task={el} 
                  key={el.id}
                  doneTask={() => this.doneTask(el.id)} 
                  deleteTask={() => this.deleteTask(el.id)}>
                </Task> 
              )}
            </ul>
        </div>
        <Input addTask={this.addTask}></Input>
      </div>
    )
  }
}

export default App;