import React, {Component} from 'react'

//非受控组件，因为input中没有用到onChange事件，所以无法去setState name的值，所以这里是非受控组件
//即组件不受state控制就是非控制组件
export default class UnControlledDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "hl"
        };
        //必须写在constructor，写在componentDidMount会导致无法获取到input对象
        this.inputRef = React.createRef()
        this.fileInputRef = React.createRef()
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {/*下面这两种写法this.inputRefOne获取的是这个节点，而this.inputRef获取的是这个input对象*/}
                <input type="text" defaultValue={this.state.name} ref={ref=>this.inputRefOne=ref}/>
                <input type="text" defaultValue={this.state.name} ref={this.inputRef}/>
                <span>name:{this.state.name}</span>
                <button onClick={this.clickButton}>弹出</button>

                <input type="file" ref={this.fileInputRef}/>
                <button onClick={this.clickButtonFile}>弹出文件名</button>

            </div>
        )
    }

    clickButton = (event) => {
        console.log(this.inputRef)
        const ele = this.inputRef.current
        alert(ele.value)
    }

    clickButtonFile=()=>{
        console.log(this.fileInputRef)
        const ele = this.fileInputRef.current
        alert(ele.files[0].name)
    }
}
