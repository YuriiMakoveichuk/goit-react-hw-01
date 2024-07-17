import { useState } from 'react'

import userData from '../userData.json'

import './App.css'
import Profile from './Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>
    </>
  )
}

export default App
