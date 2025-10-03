import { useState } from 'react'
import LandingPage from './component/LandingPage'
import { Route, Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Route>
        <Route path='/' element={<LandingPage/>}></Route>
      </Route>
    </>
  )
}

export default App
