import React from 'react';
import image4 from "../../assets/Products/sunglass1.jpeg";
import image5 from "../../assets/Products/watch1.jpeg";
import image6 from "../../assets/Products/sunglass2.jpg";
import image7 from "../../assets/Products/watch2.jpeg";
import image8 from "../../assets/Products/sunglasses3.png";
import { FaStar } from "react-icons/fa6";

const ProductsData=[
  {
    id: 1,
    img: image4,
    title: "Gucci Sunglasses",
    color: '4.5',
    aosDelay: "0",
  },
  {
    id: 2,
    img: image5,
    title: "Rolex watch",
    color:'4.8',
    aosDelay: "200",
  },
  {
    id: 3,
    img: image6,
    title: "Fashionable Sunglasses",
    color:"4.6",
    aosDelay: "400",
  },
  {
    id: 4,
    img: image7,
    title: "Breitling for Bentley",
    color:"4.9",
    aosDelay: "600",
  },
  {
    id: 5,
    img: image8,
    title: "Versache sunglass",
    color:"5.0",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12 bg-green-950'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-gold'>On Bestsellers</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-gold'>ALL EYES ON</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'> lorem dncnvofndkmv</p>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {
              ProductsData.map((data)=>(
                <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className='space-y-3' >
                <img src={data.img}
                className='h-[200px] w-[150px] object-cover-rounded-md'/>
                <div>
                  <h3 className='font-semibold text-gold'>{data.title}</h3>
                  <div className='flex items-center gap-1 text-gold'>
                    <FaStar className="text-yellow-400"/>
                    <span >{data.color}</span>
                  </div>
                </div>

                </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
