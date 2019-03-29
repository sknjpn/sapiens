import React, { Component } from 'react';
import './css/App.css';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>買い物リスト</p>
          <Todo name="にんじん" value={2} />
          <Todo name="だいこん" value={3} />
          <Todo name="しいたけ" value={5} />
        </header>
      </div>
    );
  }
}

export default App;
