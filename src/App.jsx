
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'
import Home from './pages/Home'
import Products from './pages/Products'


export default function App() {


  return (
    <>
    
    <BrowserRouter>
    <Header />
    <Sidebar />
    <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
    
    </>
  )
}
