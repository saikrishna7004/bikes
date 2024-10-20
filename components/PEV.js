import React from 'react';

const PEVBikesSection = () => {
  return (
    <div
      className="bg-cover bg-center py-10"
      style={{
        backgroundImage: `linear-gradient(90deg, #000000 10%, rgba(0, 0, 0, 0) 100%), url(https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design.png)`,
        height: '92vh'
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Effortless Mobility: Karthik’s PEV Bikes</h2>
        </div>
        <div className="px-4">
          <p className="text-lg text-gray-300">
            Discover a new way to move with <strong>Karthik’s Electric Frontier PEV Bikes</strong>. Combining cutting-edge technology with eco-friendly design, our e-bikes offer a smooth, powerful ride for any journey. Whether commuting or exploring, experience effortless mobility with zero emissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PEVBikesSection;
