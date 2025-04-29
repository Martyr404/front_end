import React from 'react';

const DevelopmentTimeline = () => {
  const timelineItems = [
    {
      year: 2023,
      description: "Launched our flagship product with React and Node.js, achieving 10,000+ active users within the first month."
    },
    {
      year: 2024,
      description: "Expanded our team to 20 members and opened a new office in downtown. Secured Series A funding of $5M."
    },
    {
      year: 2025,
      description: "Partnered with major industry leaders to develop innovative solutions. Recognized as 'Startup of the Year'."
    },
    {
      year: 2026,
      description: "Launched our first product, 'Product X', which has been downloaded by over 1 million users."
    }
  ];

  const backgroundInfo = {
    title: "BACKGROUND",
    items: [
      "Founded in 2022 by tech industry veterans",
      "Headquartered in San Francisco with remote teams worldwide",
      "Focus on AI-powered solutions for enterprise clients",
      "Committed to sustainable and ethical technology development"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-8">DEVELOPMENT JOURNEY</h1>
      
      {/* Responsive container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Timeline Section - Left on desktop */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">TIMELINE</h2>
          <div className="relative">
            <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-0.5 bg-[#6f6f6f] transform -translate-x-1/2"></div>
            
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pl-12 pb-8">
                <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-2 border-[#6f6f6f] bg-white transform -translate-x-1/2 z-10"></div>
                
                {index !== timelineItems.length - 1 && (
                  <div className="absolute left-4 top-5 h-[calc(100%-0.5rem)] w-0.5 bg-[#6f6f6f] transform -translate-x-1/2"></div>
                )}
                
                <div className="mb-1">
                  <span className="text-xl font-semibold">{item.year}</span>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Section - Right on desktop */}
        <div className="lg:w-1/2 lg:mt-0 mt-6">
          <h2 className="text-2xl font-semibold mb-6">{backgroundInfo.title}</h2>
          <div className="space-y-3">
            {backgroundInfo.items.map((item) => (
              <p className="text-gray-700 pl-4 relative">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[#6f6f6f]"></span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTimeline;