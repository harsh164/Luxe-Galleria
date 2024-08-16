import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Modal from 'react-modal';
import { useAuth } from "../../context/AuthContext";
import { useCart } from '../../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import womenImage1 from '../../assets/women/womenn1.webp';
import womenImage2 from '../../assets/women/womenn2.jpeg';
import womenImage3 from '../../assets/women/womenn3.jpeg';
import womenImage4 from '../../assets/women/womenn4.jpeg';
import womenImage5 from '../../assets/women/womenn5.jpeg';
import relatedImage1 from '../../assets/related/related1.avif';
import relatedImage2 from '../../assets/related/related2.avif';
import relatedImage3 from '../../assets/related/related3.avif';
import casualRelatedImage1 from '../../assets/casual/casual1.avif'; 
import casualRelatedImage2 from '../../assets/casual/casual2.avif'; 
import casualRelatedImage3 from '../../assets/casual/casual3.avif';
import SummerRelatedImage1 from '../../assets/summer/summer1.avif';
import SummerRelatedImage2 from '../../assets/summer/summer2.avif';
import SummerRelatedImage3 from '../../assets/summer/summer3.avif';


export const ProductsData = [
  {
    id: 4,
    img: womenImage1,
    title: 'Elegant Dress',
    price: '$250',
    desc: 'Elegant evening dress for special occasions',
    rating: '4.7',
    aosDelay: '0',
    category: 'Women',
  },
  {
    id: 5,
    img: womenImage2,
    title: 'Casual Wear',
    price: '$100',
    desc: 'Comfortable and stylish casual wear',
    rating: '4.5',
    aosDelay: '200',
    category: 'Women',
  },
  {
    id: 6,
    img: womenImage3,
    title: 'Summer Dress',
    price: '$150',
    desc: 'Light and breezy summer dress',
    rating: '4.8',
    aosDelay: '400',
    category: 'Women',
  },
  {
    id: 7,
    img: womenImage4,
    title: 'Winter Coat',
    price: '$300',
    desc: 'Warm and stylish winter coat',
    rating: '4.9',
    aosDelay: '600',
    category: 'Women',
  },
  {
    id: 8,
    img: womenImage5,
    title: 'Office Wear',
    price: '$200',
    desc: 'Elegant office wear for a professional look',
    rating: '4.6',
    aosDelay: '800',
    category: 'Women',
  },
];

export const RelatedProductsData = [
  {
    id: 9,
    img: relatedImage1,
    title: 'Fashion Scarf',
    price: '$50',
    desc: 'Stylish scarf to complement any outfit',
    rating: '4.3',
    category: 'Accessories',
  },
  {
    id: 10,
    img: relatedImage2,
    title: 'Leather Belt',
    price: '$70',
    desc: 'High-quality leather belt',
    rating: '4.5',
    category: 'Accessories',
  },
  {
    id: 11,
    img: relatedImage3,
    title: 'Sunglasses',
    price: '$120',
    desc: 'Trendy sunglasses for a chic look',
    rating: '4.7',
    category: 'Accessories',
  },
];

export const CasualRelatedProductsData = [
  {
    id: 12,
    img: casualRelatedImage1,
    title: 'Casual Shoes',
    price: '$80',
    desc: 'Comfortable casual shoes for everyday wear',
    rating: '4.6',
    category: 'Accessories',
  },
  {
    id: 13,
    img: casualRelatedImage2,
    title: 'Stylish Hat',
    price: '$45',
    desc: 'Trendy hat to match your casual outfit',
    rating: '4.4',
    category: 'Accessories',
  },
  {
    id: 14,
    img: casualRelatedImage3,
    title: 'Casual Outfit',
    price: '$90',
    desc: 'Comfortable and trendy casual outfit',
    rating: '4.5',
    category: 'Accessories',
  },
];

export const SummerRelatedProductsData = [
  {
    id: 15,
    img: SummerRelatedImage1,
    title: 'Summer Hat',
    price: '$30',
    desc: 'Stylish hat to protect you from the sun',
    rating: '4.4',
    category: 'Accessories',
  },
  {
    id: 16,
    img: SummerRelatedImage2,
    title: 'Beach Bag',
    price: '$50',
    desc: 'Large bag perfect for beach outings',
    rating: '4.5',
    category: 'Accessories',
  },
  {
    id: 17,
    img: SummerRelatedImage3,
    title: 'Sunglasses',
    price: '$60',
    desc: 'Chic sunglasses to complete your summer look',
    rating: '4.6',
    category: 'Accessories',
  },
];

const Women = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [relatedProductModalIsOpen, setRelatedProductModalIsOpen] = useState(false);
  const [selectedRelatedProduct, setSelectedRelatedProduct] = useState(null);
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const womenProducts = ProductsData.filter(product => product.category === 'Women');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setRelatedProductModalIsOpen(false);
  };

  const getRelatedProducts = () => {
    if (selectedProduct?.title === 'Casual Wear') {
      return CasualRelatedProductsData;
    } else if (selectedProduct?.title === 'Summer Dress') {
      return SummerRelatedProductsData;
    }
    return RelatedProductsData;
  };

  const handleAddToCart = (item) => {
    if (!isAuthenticated) {
      toast.error('Please log in to add items to the cart.');
      return;
    }
    addToCart(item);
    toast.success(`Added ${item.title} to cart!`);
    console.log('Item added to cart:', item);
  };

  const handleAddToCartFromMainProduct = () => {
    if (selectedProduct) {
      handleAddToCart(selectedProduct);
      closeModal();
    }
  };

  const openRelatedProductModal = (product) => {
    setSelectedRelatedProduct(product);
    setRelatedProductModalIsOpen(true);
  };

  return (
    <div style={{ marginTop: '56px', marginBottom: '48px', backgroundColor: '#004d40' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ color: '#000', fontSize: '14px' }}>On Bestsellers</p>
          <h1 style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold' }}>WOMEN'S COLLECTION</h1>
          <p style={{ color: '#b0b0b0', fontSize: '12px' }}>Exclusive women's products</p>
        </div>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {womenProducts.map((product) => (
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  style={{
                    backgroundColor: '#2196F3',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    marginTop: '12px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Add to Cart
                </button>
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
                  onClick={handleAddToCartFromMainProduct}
                  style={{
                    backgroundColor: '#2196F3',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    marginTop: '12px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div style={{ marginTop: '40px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Related Products</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {getRelatedProducts().map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
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
                    onClick={() => openRelatedProductModal(relatedProduct)}
                  >
                    <img
                      src={relatedProduct.img}
                      alt={relatedProduct.title}
                      style={{ height: '200px', width: '150px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div style={{ textAlign: 'center', marginTop: '12px' }}>
                      <h3 style={{ fontWeight: '600' }}>{relatedProduct.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginTop: '8px' }}>
                        <FaStar style={{ color: '#fbc02d' }} />
                        <span>{relatedProduct.rating}</span>
                      </div>
                      <p style={{ marginTop: '8px', fontWeight: 'bold' }}>{relatedProduct.price}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(relatedProduct);
                      }}
                      style={{
                        backgroundColor: '#2196F3',
                        color: '#fff',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        marginTop: '12px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Women;