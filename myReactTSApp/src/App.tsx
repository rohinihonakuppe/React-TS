
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

        </Routes>
        <div>
          <h3> React router Link Demo</h3>
          <Link to='/'>Home</Link> | <Link to='/about'> About</Link>

        </div>
      </BrowserRouter>

    </>
  )
}

export default App
