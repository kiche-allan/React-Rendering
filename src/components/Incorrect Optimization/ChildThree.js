import React from 'react'

function ChildThree({children, name}) {
    console.log('Child Three Render')


    return (
        <div> 
            {children} {name} 
        </div>
    )
}

export default React.memo(ChildThree)