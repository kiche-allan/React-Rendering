import React from 'react'
import { useState } from 'react'
import ChildTwo from './ChildTwo'

const ParentTwo = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Allan')

    console.log('Parent One Render')

  return (
    <div>
       <button onClick={() => setCount((c) => c+ 1)}> Count - {count}</button>
       <button onClick={() => setName('React Rendering')}> Change Name</button>
       <ChildTwo name ={name} />
    </div>
  )
}

export default ParentTwo