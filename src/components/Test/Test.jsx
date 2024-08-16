import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Customer",
    text: "This is the best service I have ever used. The quality is exceptional and the customer support is fantastic. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    aosDelay: "0",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Client",
    text: "A remarkable experience from start to finish. The attention to detail and level of professionalism were beyond my expectations.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    aosDelay: "200",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Customer",
    text: "I am thoroughly impressed with the results. The team was incredibly helpful, and the end product exceeded all my expectations.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    aosDelay: "400",
  },

];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='container py-12 bg-gold'>
      <div className='text-center mb-10 max-w-[600px] mx-auto'>
        <p data-aos="fade-up" className='text-sm text-gray-600'>What Our Clients Say</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold mb-2'>Testimonials</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            data-aos="fade-up"
            data-aos-delay={testimonial.aosDelay}
            className='flex flex-col items-center p-6 bg-white shadow-lg rounded-lg space-y-4 max-w-xs'
          >
            <div className='relative w-24 h-24'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <div className='text-center'>
              <p className='text-sm text-gray-600 italic'>{testimonial.text}</p>
              <h3 className='text-lg font-semibold mt-4'>{testimonial.name}</h3>
              <p className='text-sm text-gray-500'>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
