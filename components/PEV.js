import React from 'react';

const PEVBikesSection = () => {
    return (
        <div
            className="bg-cover bg-center py-10 md:h-[92vh] content-center"
            style={{
                backgroundImage: `linear-gradient(90deg, #000000 10%, rgba(0, 0, 0, 0) 100%), url(https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design.png)`,
            }}
        >
            <div className="ml-auto md:w-[85%] w-[90%]">
                <div className="mb-8 bg-[#ea3900] md:px-12 px-8 md:py-16 pt-8 pb-12">
                    <h2 className="head-2 text-white">Effortless Mobility: <br />Devashree&apos;s PEV Bikes</h2>
                </div>
                <p className="md:text-lg text-white" style={{maxWidth: '640px'}}>
                    Discover a new way to move with <strong>Devashree PEV PEV Bikes</strong>. Combining cutting-edge technology with eco-friendly design, our e-bikes offer a smooth, powerful ride for any journey. Whether commuting or exploring, experience effortless mobility with zero emissions.
                </p>
            </div>
        </div>
    );
};

export default PEVBikesSection;
