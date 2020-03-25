import React from 'react'
import UnControlledDemo from "../../demo/UnControlledDemo";

const ContextDemo = React.lazy(() => import('./ContextDemo'))

class LazyDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <p>引入一个动态组件</p>
            <hr />
            <React.Suspense fallback={<UnControlledDemo/>}>
                <ContextDemo/>
            </React.Suspense>
        </div>

        // 1. 强制刷新，可看到 loading （看不到就限制一下 chrome 网速）
        // 2. 看 network 的 js 加载
    }
}

export default LazyDemo
