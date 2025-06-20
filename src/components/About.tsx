import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-glow">
            ABOUT ISCMUN
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://cdn.shopify.com/s/files/1/0367/8135/9239/files/60.png?v=1732566350&width=2048&fit=crop" 
              alt="Conference" 
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          
          <div>
            <p className="text-lg text-white leading-relaxed mb-1 text-glow">
            The Izmir Sınav College Model United Nations Conference (ISCMUN) is an annual conference that brings together students to engage in diplomatic simulations and discussions on global issues.
            </p>
            
            <p className="text-lg text-white leading-relaxed mb-1 text-glow">
              Our mission is to foster international understanding, develop leadership skills, and promote peaceful solutions to global challenges through the art of diplomacy and negotiation.
            </p>
            
            <p className="text-lg text-white leading-relaxed mb-1 text-glow">
              Join us in Izmir, Turkey, for three days of intensive debate, cultural exchange, and networking with like-minded individuals from diverse backgrounds.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-white text-glow">Committees</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
            <div className="text-white text-glow">Delegates</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-white text-glow">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-white text-glow">Days</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;