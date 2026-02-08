
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Employee from './Component/Employee'
import Product from './Component/Product'
import AdminComonent from './Component/Composition/AdminComonent'
import HomeComponent from './Component/Composition/HomeComponent'
import AboutComponent from './Component/Composition/AboutComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/employee/:id' element={<Employee/>} />
          <Route path='/product' element={<Product/>}/>

          <Route path='/admincomonent' element={<AdminComonent/>}>
          <Route path='/admincomonent/homecomponent' element={<HomeComponent/>}/>
          <Route path='/admincomonent/aboutcomponent' element={<AboutComponent/>}/>

          </Route>

        </Routes>
        {/* <div>
          <h3> React router Link Demo</h3>
          <Link to='/'>Home</Link> | <Link to='/about'> About</Link> | <Link to='/product?category=mobile&price=50000'> View Product</Link>

        </div> */}
      </BrowserRouter>

    </>
  )
}

export default App
