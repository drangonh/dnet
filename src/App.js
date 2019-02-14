import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {post, get} from "./client/FetchData";
import TestComponent from './page/Test'

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import {Provider} from 'react-redux'
// 引入创建好的store实例
import store from './redux/store'

// 渲染DOM
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 将store作为prop传入，即可使应用中的所有组件使用store */}
                <Provider store={store}>
                    <TestComponent/>
                </Provider>
            </div>
        )
    }
}