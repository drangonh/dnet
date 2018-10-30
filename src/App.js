import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {post, get} from "./client/FetchData";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const res = await get("/json", "");
        console.log(res)
        if (res) {
            this.setState({
                title: res.title
            })
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React{this.state.title}
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
