import React, {useState} from 'react'
import ChildOne from '../Parent Child/Child'
// import { ParentChild } from '../Parent Child/ParentChild'
import { ParentOne } from './ParentOne'

export const GrandParent = () => {

    const [newCount, setNewCount] = useState(0)
  return (
    <div>
        <button onClick={() =>setNewCount((nc) => nc +1)}>
            GrandParentCount - {newCount}
        </button>
        <ParentOne>
            <ChildOne/>
        </ParentOne>
    </div>
  )
}
