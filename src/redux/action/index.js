import {get, post} from '../../client/FetchData'

export function setPageTitle(data) {
    return (dispatch, getState) => {
        dispatch({type: 'SET_PAGE_TITLE', data: data})
    }
}

export function setInfoList(data) {
    return (dispatch, getState) => {
        // 使用fetch实现异步请求
        fetch('https://www.apiopen.top/novelApi', {
            method: 'GET',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            return res.json()
        }).then(datas => {
            let {code, data} = datas;
            if (code === 0) {
                dispatch({type: 'SET_INFO_LIST', data: data})
            }
        })
    }
}