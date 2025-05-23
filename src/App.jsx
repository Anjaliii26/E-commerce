import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { About } from './Components/About'
import { SingleProduct } from './Components/SingleProduct'
import { Home } from './Components/Home'
import { Header } from './Components/Header'
import { Products } from './Products/Products'
import { Cart } from './Components/Cart'

function App() {
  return (
    <>
      <BrowserRouter basename="/E-commerce">
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/singleproduct/:id" element={<SingleProduct />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<h1>Checkout</h1>} />
    <Route path="/orders" element={<h1>Orders</h1>} />
    <Route path="/profile" element={<h1>Profile</h1>} />
  </Routes>
</BrowserRouter>


    </>
  )
}

export default App
