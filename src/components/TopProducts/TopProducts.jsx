import React from 'react';
import image9 from "../../assets/TopProducts/Kenzo.png";
import image10 from "../../assets/TopProducts/watch3.jpeg";
import image11 from "../../assets/TopProducts/dakota.webp";

const ProductsData = [
  {
    id: 1,
    img: image9,
    title: "Tshirt",
    description: "This stylish Kenzo t-shirt offers a perfect blend of comfort and fashion.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: image10,
    title: "Watch",
    description: "A classic timepiece that combines elegance with functionality.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: image11,
    title: "Sunglasses",
    description: "These Dakota sunglasses provide superior UV protection and a stylish look.",
    aosDelay: "400",
  }
];

const TopProducts = () => {
  return (
    <div className='container py-12 bg-gold'>
      <div className='text-center mb-10 max-w-[600px] mx-auto'>
        <p data-aos="fade-up" className='text-sm text-gray-600'>Top Rated Products</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold mb-2'>For You</h1>
        <p data-aos="fade-up" className='text-xs text-gray-500'>Discover our top-rated products curated just for you.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className='flex flex-col items-center max-w-xs p-4 bg-white shadow-lg rounded-lg space-y-4 transition-transform transform hover:-translate-y-2 hover:bg-gray-800'>
            <img
              src={data.img}
              alt={data.title}
              className='h-[200px] w-[200px] object-cover rounded-md transition-transform transform hover:scale-105'
            />
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-2'>{data.title}</h3>
              <p className='text-sm text-gray-600'>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;

