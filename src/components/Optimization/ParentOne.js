import React, {useState} from 'react'
// import ChildOne from '../Parent Child/Child'
// import Child from './Child'

export const ParentOne =({children}) => {
    const [count, setCount] = useState(0)

    console.log('ParentOne  Render')

    return (
        <div>
            <button onClick={() =>setCount((c) => c + 1)}>Count - {count}</button>
            {children}
            
            {/* <ChildOne /> */}

        </div>
    )
}