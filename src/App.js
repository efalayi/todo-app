import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.jsx';


/**
 * @class App
 * @extends {Component}
 */
class App extends Component {

  /**
   * Creates an instance of App.
   * @param {any} props 
   * @memberof App
   */
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      todo: ['Go shopping', "Swim", 'Skydive']
    }
    this.addToDo = this.addToDo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  /**
   * Updates todo array with added item and sets item to empty string
   * @param {any} event 
   * @memberof App
   */
  addToDo(event) {
    event.preventDefault();
    this.setState(prevState => ({
      todo: [...prevState.todo, prevState.item],
      item: ''
    }));
  }
  
  /**
   * Updates state with value in input field
   * @param {any} event 
   * @memberof App
   */
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  /**
   * @memberof App
   * @returns react-component
   */
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>A Simple ToDo App</h2>
        </div>

        <div id="todo-form">
          <h4>create a todo item</h4>
          <form>
            <input type="text" name="item" onChange={this.handleChange} value={this.state.item} placeholder="Enter a todo item" />
            <Button name="add item" handleClick={this.addToDo} />
          </form>
        </div>
        <br />
        <table id="todo-table">
          <thead>
            <tr>
              <th>s/n</th>
              <th> Item to do </th>
            </tr>
          </thead>
          <tbody>
            {this.state.todo.map((item, i) =>
              <tr key={"item"+i}>
                <td>{i + 1}</td>
                <td>{item}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div id="footer">
          <p className="app-info">
            Have fun with this simple app, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
