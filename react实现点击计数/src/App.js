import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        };
        this.handleClick =this.handleClick.bind(this);
    }
    getInitialState() {
        return { clickCount: 0 };
    }
    handleClick() {
        this.setState({ clickCount:this.state.clickCount+1});

    }
    render() {
        return (
            <div>
                <p class="text">React实现点击计数</p>
                <div id={"box"}>
                    <h2 onClick={this.handleClick}>点我！点击次数为:{this.state.clickCount}</h2>
                </div>
            </div>



        )
    }
}

export default App;
