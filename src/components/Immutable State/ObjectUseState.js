import React, {useState} from 'react'

const initState= {
    fname: 'Allan',
    lname:'Kiche'
}
const ObjectUseState = () => {

    const [person, setPerson] = useState(initState)

    const changeName =() => {
        person.fname = 'Okuna',
        person.lname = 'Nyarwanda'
        setPerson(person)
}

console.log('ObjectUseState Render')

  return (
    <div>
 <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState