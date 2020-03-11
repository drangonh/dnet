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
