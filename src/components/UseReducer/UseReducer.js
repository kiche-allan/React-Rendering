import React, {useReducer} from 'react'
const initialState = 0

const reducer = (state, action) => {
    switch(action) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return initialState
        default: return state

    }
}

const UseReducer = () => {
   const  [count, dispatch] = useReducer(reducer, initialState)

   console.log('UseReducer Render')
  return (
    <div>
        <div>{count}</div>
        <button onClick={() =>dispatch('incxrement')}>increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() =>dispatch('reset')}>Reset</button>

    </div>
  )
}

export default UseReducer