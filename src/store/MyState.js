import {observable, action,runInAction} from 'mobx';
class MyState {
    @observable data = null;
    @observable state = null;
    @action initData = async () => {
        try {
            const data = await getData("xxx");
            runInAction("说明一下这个action是干什么的。不写也可以", () => {
                this.state = "success"
                this.data = data;
            })
        } catch (error) {
            runInAction(() => {
                this.state = "error"
            })
        }

    };
}
