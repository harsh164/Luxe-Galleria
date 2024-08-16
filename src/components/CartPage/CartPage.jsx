import React, { useState } from 'react';
import { useCart } from '../../context/CartContext'; // Ensure this path is correct

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Ensure updateQuantity method exists

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace(/[^0-9.-]+/g, '')), 0).toFixed(2);

  // Handle quantity change
  const handleQuantityChange = (item, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(item, newQuantity);
    }
  };

  return (
    <div className='container mx-auto mt-12 mb-12 bg-green-950 p-6 rounded-lg'>
      <h1 className='text-4xl font-bold text-white text-center mb-8'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-white text-center text-lg'>Your cart is empty.</p>
      ) : (
        <div>
          <ul className='space-y-6'>
            {cartItems.map((item, index) => (
              <li key={index} className='flex items-center bg-green-950 text-black p-6 rounded-lg shadow-md'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='h-32 w-32 object-cover rounded-lg mr-6'
                />
                <div className='flex flex-col flex-grow'>
                  <span className='text-lg font-semibold'>{item.title}</span>
                  <span className='text-md'>{item.price}</span>
                  <div className='flex items-center mt-2'>
                    <label className='mr-2 text-md'>Quantity:</label>
                    <input
                      type='number'
                      min='1'
                      value={item.quantity || 1}
                      onChange={(e) => handleQuantityChange(item, e)}
                      className='border border-green-900 p-2 rounded w-16'
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className='bg-red-600 text-white px-4 py-2 rounded-lg ml-4 hover:bg-red-700'
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className='mt-8 p-6 bg-green-950 text-white rounded-lg shadow-md'>
            <h2 className='text-xl font-bold'>Total Price</h2>
            <p className='text-3xl font-bold'>{`$${totalPrice}`}</p>
            <button
              className='mt-4 bg-blue-600 text-black px-6 py-3 rounded-lg hover:bg-blue-700'
              onClick={() => alert('Proceed to Checkout')}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
