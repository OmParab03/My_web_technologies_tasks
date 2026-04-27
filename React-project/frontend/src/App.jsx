import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Products from './components/products';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
