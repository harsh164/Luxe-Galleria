// src/components/Navbar/Navbar.jsx
import React from 'react';
import Logo from '../../assets/Hero/Logo.png'; // Update the path as needed
import { IoMdSearch } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa'; // Update import statement
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth from AuthContext

const Menu = [
  { id: 1, name: 'Men', link: '/men' },
  { id: 2, name: 'Women', link: '/women' },
  { id: 3, name: 'Beauty', link: '/beauty' },
  { id: 4, name: 'Home', link: '/' },
  { id: 5, name: 'Login', link: '/login' },
  { id: 6, name: 'Sign Up', link: '/signup' },
];

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate(); 

  const handleCartClick = () => {
    console.log('Cart button clicked'); 
    if (isAuthenticated) {
      navigate('/cart'); 
    } else {
      navigate('/login');
      console.log('login first');
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <div className="bg-green-950 py-2 sm:py-0">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="bg-gradient-to-r from-green-950 font-bold text-2xl flex gap-2 text-yellow-100"
            >
              <img
                src={Logo}
                className="w-20 uppercase"
                alt="LuxeGalleria Logo"
              />
              LuxeGalleria
            </Link>
          </div>
          <div>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                aria-label="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-yellow-200"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-green-950 absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
          </div>
          <button
            onClick={handleCartClick}
            className="bg-gradient-to-r from-yellow-200 to-yellow-200 transition-all duration-200 text-green-950 py-1 px-4 rounded-full flex items-center gap-3 group"
            aria-label="Cart"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaShoppingCart
              className="text-xl text-green-950 drop-shadow-sm cursor-pointer"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center bg-black">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="inline-block px-4 py-2 text-white hover:text-yellow-300 duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
