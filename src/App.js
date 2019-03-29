import React, { Component } from 'react';
import './css/App.css';
import Todo from './Todo';

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
          {todos}
        </header>
      </div>
    );
  }
}

export default App;
