
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'
import Home from './pages/Home'
import Products from './pages/Products'
import { useState } from 'react';

export default function App() {
  const [toggleMenu, setToggleMenu] = useState('closed');

  return (
    <>

      <BrowserRouter>
      {/* show sidebar and page content{header, content, footer} beside each other */}
        <div className="flex flex-row w-100vw h-screen">
          <Sidebar toggleMenu={toggleMenu}  setToggleMenu={setToggleMenu}/>

          {/* display header, content, footer above each other by flex property an change direction to be col not row  */}
          <div className="grow-7 app-container flex flex-col justify-between w-full ">
            <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              {/* Add more routes here */}
            </Routes>
            <Footer />
          </div>
          
        </div>
        
      </BrowserRouter>

    </>
  )
}
