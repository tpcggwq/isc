import React from 'react';

const letters = [
  {
    name: 'İSİM 1',
    title: 'İSİM 1',
    img: 'https://i.imgur.com/0y0y0y0.png', // Replace with real photo URL
    letter: `MESAJ1`,
  },
  {
    name: 'İSİM2',
    title: 'İSİM2',
    img: 'https://i.imgur.com/1x1x1x1.png', // Replace with real photo URL
    letter: `MESAJ2`,
  },
];

const Letters = () => (
  <section id="letters" className="py-20 bg-transparent scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-2">Letters</h2>
        <p className="text-xl text-purple-200 italic">from our executive team</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {letters.map((person) => (
          <div key={person.name} className="bg-[#2a1a2e]/80 rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <img src={person.img} alt={person.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-md" />
            <h3 className="text-3xl font-bold text-white mb-1 text-center">{person.name}</h3>
            <p className="text-lg text-purple-200 mb-6 text-center">{person.title}</p>
            <p className="text-white text-base whitespace-pre-line text-left w-full max-w-2xl">{person.letter}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Letters; 