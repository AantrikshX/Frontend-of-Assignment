import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"
import Create from "./components/create"
import Section1 from "./components/section1"
import Eventdetails from './components/eventdetails'
import Section2 from "./components/section2"

const App = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<>
      <Section1/>
      <Section2/>
      </>}
      />
      <Route path='/create' element={<Create />} />
      <Route path="/event/:id" element={<Eventdetails />} />
      
    </Routes>
    </>
  )
}

export default App