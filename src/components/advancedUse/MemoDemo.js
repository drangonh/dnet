import React from 'react'

function MemoDemo(props) {
    return (
        <div>
            <span>{this.props.count}</span>
        </div>
    )
}

function memoFunc(prePops, nextPops) {
    if (prePops.count == nextPops.count) {
        return true
    }
    return false
}

export default React.memo(MemoDemo, memoFunc)
