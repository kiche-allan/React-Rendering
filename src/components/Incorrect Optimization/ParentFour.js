import React from 'react'
import { useState } from 'react'
import { ChildFive } from './ChildFive'
// import ChildThree from './ChildThree'


const ParentFour = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Allan')


    console.log('Parent Four Render')


  return (
    <div>
       <button onClick={() => setCount((c) => c+ 1)}> Count - {count}</button>
       <button onClick={() => setName('React Rendering')}> Change Name</button>
       {/* <ChildThree name ={name}> <strong> Hello </strong> </ChildThree> */}
       <ChildFive name ={name}> <strong> Hello </strong> </ChildFive>
    </div>
  )
}

export default ParentFour