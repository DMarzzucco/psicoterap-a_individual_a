import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Home, Secon, Third, Form, Calcul } from './page';
import { Footer, Header } from './components'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        } />
        {/*  */}
        <Route path="/Secon" element={<>
          <Header />
          <Secon />
          <Footer />
        </>
        } />
        {/*  */}
        <Route path='/Third' element={
          <>
            <Header />
            <Third />
            <Footer />
          </>
        } />
        {/*  */}
        <Route path='/Form' element={
          <>
            <Header />
            <Form />
            <Footer />
          </>
        } />
        {/*  */}
        <Route path='/Calcu' element={<>
          <Header />
          <Calcul />
          <Footer />
        </>} />
      </Routes>
    </Router>
  )


}
export default App
