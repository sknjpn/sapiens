import React, { Component } from 'react';
import './css/App.css';

class Counter extends Component {
    render() {
        return (
            <div className="form">
                <form name="todoform" onSubmit={this.props.onSubmit}>
                    <input name="title" type="text" placeholder="タイトル ※必須" defaultValue="にんじん" /><br />
                    <textarea name="desc" placeholder="説明を入力" defaultValue="カレー用"></textarea><br />
                    <button type="submit">todoを作成</button>
                </form>
            </div>
        )
    }
}

export default Counter;