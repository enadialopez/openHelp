import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar'
import { HomePage } from './sections/HomePage'
import { Donations } from './sections/Donations'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className ='main_sections'>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/donate' element={<Donations/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
