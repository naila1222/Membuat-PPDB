import { useState } from 'react'
import LandingPage from './component/LandingPage'
import { Route, Router, Routes } from 'react-router-dom'


  return (
  
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>

  )


export default App
