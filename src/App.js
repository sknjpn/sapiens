import React, { Component } from 'react';
import './css/App.css';
import Todo from './Todo.js';
import Counter from './Counter.js';

class App extends Component {

  constructor() {
    super()

    this.state = {
      todos: [
        {
          name: "しいたけ",
          value: 3
        },
        {
          name: "だいこん",
          value: 1
        },
        {
          name: "にんじん",
          value: 5
        },
      ]
    }
  }

  render() {
    const todos = this.state.todos.map(todo => <Todo name={todo.name} value={todo.value} />)

    return (
      <div className="App">
        <header className="App-header">
          <p>買い物リスト</p>
          <Counter onSubmit={this.onSmit.bind(this)} />
          {todos}
        </header>
      </div>
    );
  }

  onSmit(e) {
    e.preventDefault();

    const todos = this.state.todos.slice();

    todos.push({
      name: e.target.title.value,
      value: e.target.desc.value
    });

    this.setState({ todos: todos })
  }
}

export default App;
