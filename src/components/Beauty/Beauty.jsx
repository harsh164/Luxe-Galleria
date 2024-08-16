import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

// Import your images here
import cosmeticsImage from '../../assets/Beauty/beauty1.jpeg';
import watchesImage from '../../assets/Beauty/beauty2.webp';
import sunglassesImage from '../../assets/Beauty/beauty3.webp';
import jewelryImage from '../../assets/Beauty/beauty4.jpeg';
import luxeBagsImage from '../../assets/Beauty/beauty5.jpeg';

export const BeautyProductsData = [
  {
    id: 1,
    img: cosmeticsImage,
    title: 'Cosmetics',
    price: '$50',
    desc: "High-quality cosmetics for all skin types",
    rating: '4.6',
    aosDelay: '0',
    category: 'Beauty',
  },
  {
    id: 2,
    img: watchesImage,
    title: 'Watches',
    price: '$150',
    desc: "Elegant watches for every occasion",
    rating: '4.7',
    aosDelay: '200',
    category: 'Beauty',
  },
  {
    id: 3,
    img: sunglassesImage,
    title: 'Sunglasses',
    price: '$80',
    desc: "Stylish sunglasses for sunny days",
    rating: '4.8',
    aosDelay: '400',
    category: 'Beauty',
  },
  {
    id: 4,
    img: jewelryImage,
    title: 'Jewelry',
    price: '$200',
    desc: "Exquisite jewelry pieces to enhance your style",
    rating: '4.9',
    aosDelay: '600',
    category: 'Beauty',
  },
  {
    id: 5,
    img: luxeBagsImage,
    title: 'Luxe Bags',
    price: '$300',
    desc: "Luxury bags for the modern fashionista",
    rating: '5.0',
    aosDelay: '800',
    category: 'Beauty',
  },
];

const Beauty = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const beautyProducts = BeautyProductsData.filter(product => product.category === 'Beauty');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className='mt-14 mb-12 bg-green-950'>
      <div className='container mx-auto'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-black'>On Bestsellers</p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>BEAUTY COLLECTION</h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>Exclusive beauty products</p>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {beautyProducts.map((product) => (
              <div
                data-aos='fade-up'
                data-aos-delay={product.aosDelay}
                key={product.id}
                className='space-y-3 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center'
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.img}
                  className='h-[200px] w-[150px] object-cover rounded-md'
                  alt={product.title}
                />
                <div className='text-center'>
                  <h3 className='font-semibold text-white'>{product.title}</h3>
                  <div className='flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedProduct && (
          <div className='mt-10 p-5 bg-white rounded-md'>
            <h2 className='text-2xl font-bold text-center'>{selectedProduct.title}</h2>
            <div className='flex flex-col items-center'>
              <img
                src={selectedProduct.img}
                className='h-[300px] w-[200px] object-cover rounded-md mt-4'
                alt={selectedProduct.title}
              />
              <h3 className='text-xl font-arial mt-4'>{selectedProduct.desc}</h3>
              <p className='text-xl font-semibold mt-4'>{selectedProduct.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Beauty;
