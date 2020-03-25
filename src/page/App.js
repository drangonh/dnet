import React, {} from 'react';
import logo from '../logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';
import UnControlledDemo from "../demo/UnControlledDemo";
import PortalsDemo from "../components/advancedUse/PortalsDemo";
import ContextDemo from "../components/advancedUse/ContextDemo";
import LazyDemo from "../components/advancedUse/LazyDemo";
import SCUDemo2 from "../components/advancedUse/SCUDemo2";

// inject 在模块内用 @inject('test')，将 test 注入到 props 上,保证结构的一致性
// 使用 @observer ，将组件变为观察者，响应 name,age 状态变化。
// 当状态变化时，组件也会做相应的更新。

// 观察者
@inject('test')
@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "dragonYellow",
            obj: {
                name: "123"
            },
            num: 0
        };
    }

    //静态方法。静态方法中的this永远只想当前的实例
    //如果调用方法的时候什么都不传递默认第一个参数是event
    changeName = (event) => {
        // this.setState({
        //     num: this.state.num + 1
        // })
        //
        // this.setState({
        //     num: this.state.num + 1
        // })
        //
        // this.setState({
        //     num: this.state.num + 1
        // });

        this.setState((preState, props) => {
            console.log(preState, props)
            return{
                num:preState.num + 1
            }

        })

        this.setState((preState, props) => {
            return{
                num:preState.num + 1
            }
        })
    }

    render() {
        const {test} = this.props;
        const {obj, num} = this.state
        console.log(test)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p onClick={this.changeName}>
                        {num}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {test.name + test.age}
                    </a>
                </header>

                <SCUDemo2/>
            </div>
        );
    }
}

export default App;
