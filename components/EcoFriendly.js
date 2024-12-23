"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const EcoFriendly = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-wrap justify-between relative container max-w-[1300px] ms-auto mr-0 mb-10">
            <div className="w-full md:w-2/5 pr-5 z-10 relative py-10">
                <h1 className="text-4xl font-bold text-[#ea3900] head pl-8 relative">
                    <div className="absolute inset-y-0 left-0 w-full md:mx-[-105%] mx-[-100%] bg-[#ea3900] z-[-1]"></div>
                    Ride the Future:
                    <br />
                    <span className="text-zinc-700">Effortless, Eco-Friendly Electric Bikes for Every Journey</span>
                </h1>
                <p className="mt-8 text-justify pl-8 text-lg text-neutral-700">
                    Experience the thrill of effortless commuting with our cutting-edge electric bikes. Designed for sustainability and convenience, our <span className="text-orange-600 font-bold">PEV Electric Bikes</span> provide a smooth, eco-friendly ride for urban explorers and adventure seekers alike. Join the green revolution today!
                </p>
            </div>
            <div className="md:w-3/5 mt-5 md:mt-0 relative">
                <Image
                    fetchPriority="high"
                    decoding="async"
                    width={1200}
                    height={800}
                    src="/images/PEV_ELECTRIC_13-removebg-preview-2.png"
                    alt="Electric Bike"
                    className={`w-[1200px] h-auto ${isVisible ? 'slide-in' : 'opacity-0'}`} // Apply animation class conditionally
                />
                <div className="absolute inset-0 z-[-1]" style={{ background: 'linear-gradient(180deg,rgba(0,0,0,0) 80%,#ea3900 80%)' }}></div>
            </div>
        </div>
    );
}

export default EcoFriendly;
