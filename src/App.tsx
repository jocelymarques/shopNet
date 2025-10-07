import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Product from './pages/product';
import Cart from './pages/cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        {/* outras rotas */}
      </Routes>
    </div>
  )
}

export default App
