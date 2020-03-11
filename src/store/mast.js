// 这里引入的是 mobx
import {observable, computed, action} from 'mobx';

class MastSotre {
    @observable list;

    //computed产生一个可以被其他observable观察的值
    //如果你想响应式的产生一个可以被其它 observer 使用的值，请使用 @computed，如果你不想产生一个新值，而想要达到一个效果，请使用 autorun
    @computed
    get getList () {
        return this.list.filter(v => v.id !== 1)
    }

    @action
    addList = obj => this.list.push(obj)

    constructor() {
        this.list = [
            {
                name: '香蕉',
                id: 0
            },
            {
                name: '苹果',
                id: 1
            },
            {
                name: '西瓜',
                id: 2
            }
        ]
    }
}
const mast = new MastSotre()
export default mast
