import React from 'react';

const Committees = () => {
  const committees = [
    {
      name: "United Nations Security Council",
      abbreviation: "UNSC",
      topic: "The situation in the Middle East",
     

    },
    {
      name: "United Nations Human Rights Council",
      abbreviation: "UNHRC", 
      topic: "Human rights violations in conflict zones",
      

    },
    {
      name: "United Nations Environment Programme",
      abbreviation: "UNEP",
      topic: "Climate change and sustainable development",
      

    },
    {
      name: "World Health Organization",
      abbreviation: "WHO",
      topic: "Global health security and pandemic preparedness",
    
    },
    {
      name: "United Nations Economic and Social Council",
      abbreviation: "ECOSOC",
      topic: "Economic recovery in post-pandemic era",
     
    },
    {
      name: "International Court of Justice",
      abbreviation: "ICJ",
      topic: "Maritime disputes and international law",
      
    }
  ];

  return (
    <section id="committees" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white font-bold mb-8 text-glow">
            COMMITTEES
          </h2>
          <p className="text-lg text-white leading-relaxed mb-1 text-glow">
            Choose from six diverse committees addressing critical global issues
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <div key={index} className="rounded-lg overflow-hidden transition-shadow duration-300">
              <div className="ml-3 text-xl font-bold text-white">
                <h3 className="text-2xl font-bold mb-2">{committee.abbreviation}</h3>
                <div className="flex justify-between items-center text-sm">
               
              </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg text-white leading-relaxed mb-1 text-glow">{committee.name}</h4>
                <p className="text-lg text-white leading-relaxed mb-1 text-glow">{committee.topic}</p>
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded transition-colors duration-200">
                  Study Guide
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committees;