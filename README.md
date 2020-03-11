This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### 在create-react-app中使用mobx
* 参考链接(在create-react-app中使用mobx)[https://blog.csdn.net/tianxintiandisheng/article/details/103667463]

### 创建项目及mobx在项目中的初步使用
* npm install -g create-react-app
* create-react-app dnet
* cd dnet
* 先提交代码到git,然后yarn eject
* yarn add @babel/plugin-proposal-decorators --save-dev
* 在package.json中修改babel的配置为
```$xslt
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }]
      ]
  },
```
* yarn add mobx --save
* yarn add mobx-react --save
* 最后yarn一下，安装yarn eject之后的依赖
* 新建store文件夹，新建test.js文件，新增代码
```$xslt
import {observable, action} from 'mobx';

class TestStore {
    @observable name;
    @observable age;

    @action
    changeAge = i => {
        this.age = this.age + Number(i)
    }

    constructor() {
        this.name = '测试mobx'
        this.age = 30
    }
}
const test = new TestStore()
export default test
```
* 在store中新增index.js问价，新增代码
```$xslt
// 汇总store
import test from './test'

const stores = {
    test
}
export default stores
```
* 修改入口文件
```$xslt
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "mobx-react"
import stores from './store/index'

import {configure} from 'mobx'; // 开启严格模式
configure({enforceActions: true}) // 开启严格模式


ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>
    , document.getElementById('root'));
```
* 最后在需要接收观察test的地方使用
```$xslt
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';

// inject 在模块内用 @inject('test')，将 test 注入到 props 上,保证结构的一致性
// 使用 @observer ，将组件变为观察者，响应 name,age 状态变化。
// 当状态变化时，组件也会做相应的更新。

// 观察者
@inject('test')
@observer
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {test} = this.props;
        console.log(test)
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
                        {test.name + test.age}
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
```

