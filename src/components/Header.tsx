import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const year = now.getFullYear();
      const target = new Date(`${year}-11-01T00:00:00`);
      if (now > target) {
        target.setFullYear(year + 1);
      }
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setCountdown('00:00:00:00');
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown(
        `${days.toString().padStart(2, '0')}:` +
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}`
      );
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center scroll-mt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(879235_2477386102616215_5732786883977874303_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3G1yd1e5TigQ7kNvwE-HgiV&_nc_oc=Adk8PEf7qMV_stMctbGH2I0bhrxw55eCnYR0K4qctekciUVIiZClqU7H9n8wesql23g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fadb6-3.fna&oh=03_Q7cD2gEFXtdD3ec8qcE_bFANmqh4TppkFzqT1OPPrW4P6n9cNw&oe=687CB291&fıt=crop)'
        }}
      />
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Countdown Timer */}
        <div className="mb-6">
          <span className="px-4 py-2 rounded-xl bg-black bg-opacity-40 text-yellow-400 font-mono text-2xl md:text-3xl shadow-lg border-2 border-yellow-400 animate-pulse tracking-widest" style={{letterSpacing: '0.15em'}}>
            {countdown}
          </span>
        </div>
        <img 
          src="https://scontent.fadb6-3.fna.fbcdn.net/v/t1.15752-9/509879235_2477386102616215_5732786883977874303_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3G1yd1e5TigQ7kNvwE-HgiV&_nc_oc=Adk8PEf7qMV_stMctbGH2I0bhrxw55eCnYR0K4qctekciUVIiZClqU7H9n8wesql23g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fadb6-3.fna&oh=03_Q7cD2gEFXtdD3ec8qcE_bFANmqh4TppkFzqT1OPPrW4P6n9cNw&oe=687CB291&fit=crop" 
          alt="ISCMUN Logo" 
          className="mx-auto mb-6 w-32 h-32 rounded-full object-cover border-4 border-white"
        />
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          𝙸𝚂𝙲𝙼𝚄𝙉'25
        </h1>
        <p className="text-xl sm:text-2xl mb-2">
          Izmir Sınav College Model United Nations
        </p>
        <p className="text-lg sm:text-xl text-gray-200">
          Model United Nations
        </p>
        {/* Conference Details */}
        <div className="mb-8">
          <p className="text-2xl font-semibold mb-2">November 1-2-3, 2025</p>
          <p className="text-lg">İzmir, Turkey</p>
        </div>
        {/* Call to Action */}
        <button
          onClick={() => scrollToSection('registration')}
          className="bg-blue-600 hover:bg-blue-700 text-yellow px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
        >
          APPLY NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
