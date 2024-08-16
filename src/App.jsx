import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import TopProducts from './components/TopProducts/TopProducts';
import Test from './components/Test/Test';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Men from './components/Pages/Men';
import Women from './components/Women/Women';
import Beauty from './components/Beauty/Beauty';
import Login from './components/login/Login'; 
import Signup from './components/signup/Signup';
import CartPage from './components/CartPage/CartPage'; 
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Modal from 'react-modal';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

 
  React.useEffect(() => {
    Modal.setAppElement('#root'); // Replace '#root' with your app root element ID
  }, []);

  return (
    <Router>
      <CartProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <TopProducts />
                <Test />
              </>
            } />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </AuthProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
