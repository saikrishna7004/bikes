"use client"
import DealershipSection from '@/components/Dealership';
import EcoFriendly from '@/components/EcoFriendly';
import PEVBikesSection from '@/components/PEV';
import PowerYourJourney from '@/components/PowerJourney';
import ElectricVehicles from '@/components/Vehicles';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
    const [marginTop, setMarginTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newHeight = Math.max(-100, 0 - scrollY);
            setMarginTop(newHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="py-10"
            style={{
                paddingTop: '200px',
                overflowY: 'hidden',
                marginTop: `${marginTop}px`,
            }}
        >
            {/* First Section */}
            <EcoFriendly />

            {/* Second Section */}
            <div className="flex flex-wrap container mx-auto custom-container my-10 md:py-20">
                {/* Image Column */}
                <div className="w-full md:w-2/5 md:mt-[150px]">
                    <Image
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={1200}
                        src="https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-1-1.png"
                        alt="About Electric Bikes"
                        className="w-full h-auto"
                    />
                </div>

                {/* Text Column */}
                <div className="w-full md:w-1/2 mt-5 md:mt-0">
                    <div className="space-box">
                        <h2 className="head">ABOUT</h2>
                        <p className="mt-4 text-justify text-[#666]" style={{ fontSize: '18px' }}>
                            <strong>Karthik’s Electric Frontier</strong> is revolutionizing personal transportation with its <strong>PEV Bikes</strong> series, a top-tier line of electric bikes designed for the modern commuter and eco-conscious adventurer. Combining sleek design with advanced engineering, Karthik’s Electric Frontier bikes offer a smooth, reliable, and energy-efficient ride.
                        </p>
                        <p className="mt-4 text-justify text-[#666]" style={{ fontSize: '18px' }}>
                            Built with a focus on sustainability and performance, the Electric Frontier PEV bikes feature powerful electric motors, long-lasting batteries, and durable frames designed to handle both urban streets and rugged trails. Whether you’re commuting to work or exploring off-road paths, these bikes provide a seamless, pedal-assist experience that minimizes effort while maximizing range and speed.
                        </p>
                        <div className="mt-6 text-center text-[#666]">
                            <Link href="/about-us/" className="inline-block bg-[#ea3900] text-white py-2 px-4 rounded hover:bg-[#ea3900]">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <PowerYourJourney />

            <DealershipSection />

            <ElectricVehicles />

            <PEVBikesSection />
        </div>
    );
}
