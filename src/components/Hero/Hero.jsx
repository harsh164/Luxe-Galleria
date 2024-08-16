import React from 'react';
import image1 from "../../assets/Hero/eyewear.avif"
import image2 from "../../assets/Hero/tshirt.avif"
import image3 from "../../assets/Hero/watches.avif"
import { motion, useAnimation } from 'framer-motion';
import Slider from "react-slick";

// Use high-quality, accessible image URLs
const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Upgrade Your Look with the Perfect Pair"
  },
  {
    id: 2,
    img: image2,
    title: "Up to 50% off on Trendy T-Shirts"
  },
  {
    id: 3,
    img: image3,
    title: "Exclusive Watch Deals Up to 50% Off"
  }
];

const Hero = () => {
  const flipAnimation = useAnimation();

  const handleBeforeChange = () => {
    flipAnimation.start({
      opacity: [1, 0],
      scale: [1, 0.9],
      transition: { duration: 0.6, ease: "easeInOut" }
    });
  };

  const handleAfterChange = () => {
    flipAnimation.start({
      opacity: [0, 1],
      scale: [0.9, 1.05, 1],
      transition: { duration: 0.6, ease: "easeInOut" }
    });
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange
  };

  return (
    <div className='relative overflow-hidden min-h-[500px] sm:min-h-[650px] bg-gold flex justify-center items-center'>
      <div className='h-[700px] w-[700px] bg-green-950 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      
      <div className='container pb-8 sm:pb-0 relative'>
        <Slider {...settings}>
          {ImageList.map((item) => (
            <motion.div key={item.id} animate={flipAnimation}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1 className='text-5xl sm:text-6xl lg:text-7xl font-serif'>
                    Luxe Range
                  </h1>
                  <p className='text-2xl sm:text-2xl lg:text-5xl'>
                    {item.title}
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} 
                    whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                    className='bg-gradient-to-r from-green-950 to-green-500 py-2 px-4 rounded-full self-start sm:self-center sm:ml-auto'>
                    Order Now
                  </motion.button>
                </div>
                <div className='order-1 sm:order-2 relative z-10'>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className='w-[300px] h-[300px] sm:h-[400px] sm:w-[400px] object-cover mx-auto rounded-md'
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
