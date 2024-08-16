import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import image4 from '../../assets/men/men1.jpeg';
import image5 from '../../assets/men/men2.jpeg';
import image6 from '../../assets/men/men3.jpeg';

export const ProductsData = [
  {
    id: 1,
    img: image4,
    title: 'Ralph Lauren',
    price: '$120',
    desc: 'Polo by Ralph Lauren turtle neck t-shirt',
    rating: '4.5',
    aosDelay: '0',
    category: 'Men',
  },
  {
    id: 2,
    img: image5,
    title: 'Business Suit',
    price: '$3500',
    desc: 'Go to a business meet with style and elegance',
    rating: '4.8',
    aosDelay: '200',
    category: 'Men',
  },
  {
    id: 3,
    img: image6,
    title: 'Polo T-shirt',
    price: '$80',
    desc: 'Old money high-end t-shirt',
    rating: '4.6',
    aosDelay: '400',
    category: 'Men',
  },
];

const Men = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { addToCart } = useCart();

  const menProducts = ProductsData.filter(product => product.category === 'Men');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      toast.success(`Added ${selectedProduct.title} to cart!`);
      closeModal();
    }
  };

  return (
    <div style={{ marginTop: '56px', marginBottom: '48px', backgroundColor: '#004d40' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ color: '#000', fontSize: '14px' }}>On Bestsellers</p>
          <h1 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold' }}>MEN'S COLLECTION</h1>
          <p style={{ color: '#b0b0b0', fontSize: '12px' }}>Exclusive men's products</p>
        </div>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {menProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '16px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  style={{ height: '200px', width: '150px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                  <h3 style={{ fontWeight: '600' }}>{product.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginTop: '8px' }}>
                    <FaStar style={{ color: '#fbc02d' }} />
                    <span>{product.rating}</span>
                  </div>
                  <p style={{ marginTop: '8px', fontWeight: 'bold' }}>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedProduct && (
          <div style={{ marginTop: '40px', backgroundColor: '#000', color: '#fff', padding: '20px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                style={{ height: '300px', width: '200px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{selectedProduct.title}</h2>
                <p style={{ marginTop: '12px' }}>{selectedProduct.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                  <FaStar style={{ color: '#fbc02d' }} />
                  <span style={{ marginLeft: '8px' }}>{selectedProduct.rating}</span>
                </div>
                <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '12px' }}>{selectedProduct.price}</p>
                <button
                  onClick={handleAddToCart}
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#fbc02d',
                    color: '#000',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Men;
