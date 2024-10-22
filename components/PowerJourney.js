import React from 'react';

const PowerYourJourney = () => {
    return (
        <div className="py-20 md:px-20 px-5 custom-container mx-auto">
            <div className="flex mb-10">
                <div className="md:w-2/5">
                    <h2 className="sub-head mt-2">Power Your Journey</h2>
                </div>
                <div className="md:w-3/5 flex items-center">
                    <div className="border-gray-300 w-full h-[72px] bg-[#ea3900]"></div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div className="">
                    <div className="flex-shrink-0 my-3">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="64"
                            height="64"
                            src="https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Artboard-5.png"
                            alt="Powerful Electric Motor"
                            className="mb-4"
                        />
                    </div>
                    <div className="">
                        <h4 className="sub-head-2 text-zinc-800">Powerful Electric Motor</h4>
                        <p className="text">Designed to give you a boost, our high-torque motor ensures a smooth, efficient ride across different terrains.</p>
                    </div>
                </div>

                <div className="">
                    <div className="flex-shrink-0 my-3">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="64"
                            height="64"
                            src="https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Artboard-4.png"
                            alt="Long-Range Battery"
                            className="mb-4"
                        />
                    </div>
                    <div className="">
                        <h4 className="sub-head-2 text-zinc-800">Long-Range Battery</h4>
                        <p className="text">With a high-capacity battery, you can travel further on a single charge, perfect for daily commutes or weekend adventures.</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                <div className="">
                    <div className="flex-shrink-0 my-3">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="64"
                            height="64"
                            src="https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Artboard-8.png"
                            alt="Durable and Lightweight Design"
                            className="mb-4"
                        />
                    </div>
                    <div className="">
                        <h4 className="sub-head-2 text-zinc-800">Durable and Lightweight Design</h4>
                        <p className="text">Crafted with sturdy yet lightweight materials, the Electric Frontier is built to last while offering easy maneuverability.</p>
                    </div>
                </div>
                <div className="">
                    <div className="flex-shrink-0 my-3">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="64"
                            height="64"
                            src="https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Artboard-6.png"
                            alt="Advanced Technology"
                            className="mb-4"
                        />
                    </div>
                    <div className="">
                        <h4 className="sub-head-2 text-zinc-800">Advanced Technology</h4>
                        <p className="text">Equipped with smart display panels, adjustable pedal-assist levels, and regenerative braking, our e-bikes integrate cutting-edge tech for an enhanced riding experience.</p>
                    </div>
                </div>
                <div className="">
                    <div className="flex-shrink-0 my-3">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="64"
                            height="64"
                            src="https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Artboard-3.png"
                            alt="Eco-Friendly Solution"
                            className="mb-4"
                        />
                    </div>
                    <div className="">
                        <h4 className="sub-head-2 text-zinc-800">Eco-Friendly Solution</h4>
                        <p className="text">PEV Electric Bikes is committed to reducing carbon footprints. With zero emissions and energy-efficient power systems, our bikes are an environmentally responsible choice.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerYourJourney;
