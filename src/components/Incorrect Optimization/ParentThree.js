import React from 'react'
import { useState } from 'react'
import { ChildFour } from './ChildFour'
// import ChildThree from './ChildThree'


const ParentThree = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Allan')


    console.log('Parent Three Render')


  return (
    <div>
       <button onClick={() => setCount((c) => c+ 1)}> Count - {count}</button>
       <button onClick={() => setName('React Rendering')}> Change Name</button>
       {/* <ChildThree name ={name}> <strong> Hello </strong> </ChildThree> */}
       <ChildFour name ={name}> <strong> Hello </strong> </ChildFour>
    </div>
  )
}

export default ParentThree