// reducers.js
// 工具函数，用于组织多个reducer，并返回reducer集合
import {combineReducers} from 'redux'

// 一个reducer就是一个函数
function pageTitle(state = "", action) {
    // 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_PAGE_TITLE':
            return action.data
        default:
            return state
    }
}

function infoList(state = [], action) {
    switch (action.type) {
        case 'SET_INFO_LIST':
            return action.data
        default:
            return state
    }
}

// 导出所有reducer
export default combineReducers({
    pageTitle,
    infoList
})