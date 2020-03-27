import React from 'react'
import UnControlledDemo from "../../demo/UnControlledDemo";

const ContextDemo = React.lazy(() => import('./ContextDemo'))

/*
* Suspense和React.lazy、import一起实现懒加载
* */
class LazyDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    changeName = () => {
        const {changeName} = this.props;
        changeName && changeName()
    }

    render() {

        return <div>
            <p onClick={this.changeName}>引入一个动态组件</p>
            <hr/>
            {/*fallback:可设置加载完成之前加载的组件*/}
            <React.Suspense fallback={<div>Loading...</div>}>
                <ContextDemo/>
            </React.Suspense>
        </div>

        // 1. 强制刷新，可看到 loading （看不到就限制一下 chrome 网速）
        // 2. 看 network 的 js 加载
    }
}

export default LazyDemo
