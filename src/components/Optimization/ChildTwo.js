import React from 'react'

function ChildTwo() {
    console.log('Child One Render')

    return (
        <div>ChildOne Component</div>
    )
}

export default React.memo(ChildTwo)