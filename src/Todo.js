import React, { Component } from 'react';
import './css/Todo.css';

class Todo extends Component {
    render() {
        return (
            <div className="Todo">
                <p>名前:{this.props.name}</p>
                <p>数: {this.props.value}個</p>
            </div>
        );
    }
}

export default Todo;