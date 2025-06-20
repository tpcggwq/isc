import React from 'react';

const cards = [
  {
    title: 'DELEGATE',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6AhYhgLYVyr06irr7JzC2gtEhMIP5NexgmQ&sauto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'CHAIRBOARD',
    img: 'https://images.squarespace-cdn.com/content/v1/5592234fe4b097f200b0d6ad/1482725268858-44O8G5QOJ9CIMQX093I9/image-asset.jpegauto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'ADMIN',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnb7d7Cg-jbnIogCU7uC-ENOuFUnD9Bp2Kw&sauto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'PRESS',
    img: 'https://i.imgur.com/2h4Z5d2.pngauto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'SECURITY',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWuaAHDUu8qYC-1MdwQhUWSnmwHQSfk7cKQ&sauto=format&fit=crop&w=600&q=80',
  },
];

const Registration = () => {
  return (
    <section id="registration" className="py-20 bg-transparent scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-xl overflow-hidden shadow-lg group"
              style={{ minHeight: 280 }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-end p-6">
                <span className="text-white text-lg font-light">Apply for</span>
                <span className="text-white text-2xl font-bold italic" style={{ letterSpacing: 1 }}>{card.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registration;