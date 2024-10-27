"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState('mission');

    return (
        <div className="mx-auto montserrat" style={{ paddingTop: '95px', overflowY: 'hidden' }}>
            <div className='mx-auto'>
                <section className="text-center text-white mb-10 relative bg-[url('/images/transportation-services-18.png')] bg-cover bg-no-repeat bg-blend-multiply"
                style={{
                    padding: '80px',
                    backgroundColor: '#f1580c',
                    backgroundSize: 'initial',
                    backgroundPosition: 'left bottom 0px',
                    backgroundBlendMode: 'multiply'
                }}
                >
                    <h1 className="md:text-[50px] text-[40px] font-bold">About Us</h1>
                </section>
                <div className="flex flex-col md:flex-row mb-10 px-4 gap-8 mx-auto" style={{ maxWidth: '1140px' }}>
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-[34px] leading-14 font-bold text-neutral-800">Experience the Future of Mobility with PEV Electric Bikes</h2>
                        <p className="mt-4 text-justify text-neutral-700 leading-8 text-[16px]">
                            At <strong>Devashree PEV</strong>, we are dedicated to driving the future of sustainable transportation with our innovative <strong>Electric PEV bikes</strong>. Founded with the vision of reducing carbon footprints and enhancing the way people move through cities and beyond, PEV bikes is committed to designing electric bikes that are not just eco-friendly but also stylish, efficient, and accessible to everyone.
                        </p>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <Image
                            loading="lazy"
                            decoding="async"
                            width={1920}
                            height={989}
                            src="/images/Untitled-design.png"
                            alt="About Electric Bikes"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mb-10">
                <div className="md:w-1/2 md:pr-14">
                    <Image
                        loading="lazy"
                        decoding="async"
                        width={1000}
                        height={600}
                        src="/images/ea3900.png"
                        alt="about"
                        className="w-full h-auto"
                    />
                </div>
                <div className="md:w-1/2 py-4 pe-8" style={{ paddingRight: '6.2%' }}>
                    <h2 className="md:text-[40px] text-[20px] leading-14 font-bold text-neutral-800">The Highest Quality Vehicles In the Industry.</h2>
                    <p className="mt-4 text-justify text-neutral-700 leading-8">
                        Our electric bikes are the perfect blend of advanced technology and modern design, offering riders an effortless, enjoyable, and environmentally responsible commuting solution. From urban streets to rugged trails, Devashree PEV bikes empower individuals to embrace greener, smarter transportation without compromising on performance or style.
                    </p>
                    <p className="mt-2 text-justify text-neutral-700 leading-8">
                        At Devashree PEV, we prioritize quality and customer satisfaction, constantly innovating to ensure that every ride is smooth, safe, and sustainable. Our team of passionate engineers, designers, and sustainability advocates work tirelessly to create bikes that push the boundaries of personal mobility, meeting the needs of today&apos;s environmentally-conscious riders.
                    </p>
                </div>
            </div>

            <div className="mb-10 mx-auto px-10" style={{ maxWidth: '1200px', paddingTop: '100px' }}>
                <div className="flex md:flex-row flex-col mb-4 bg-neutral-100">
                    <button
                        onClick={() => setActiveTab('mission')}
                        className={`py-4 px-8 text-xl font-semibold ${activeTab === 'mission' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Mission
                    </button>
                    <button
                        onClick={() => setActiveTab('vision')}
                        className={`py-4 px-8 text-xl font-semibold ${activeTab === 'vision' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Vision
                    </button>
                </div>
                <div>
                    <div className={`transition-opacity duration-1000 ${activeTab === 'mission' ? 'opacity-100' : 'opacity-0'}`}>
                        {activeTab === 'mission' && (
                            <p className="mt-12 text-justify text-neutral-700 leading-8 text-[19px]" style={{ fontFamily: 'Open Sans,Arial,sans-serif' }}>
                                Our mission is to transform personal transportation by creating cutting-edge, eco-friendly electric vehicles that empower individuals to travel smarter, reduce their environmental impact, and embrace a healthier, more sustainable lifestyle. We aim to make electric mobility accessible to everyone, helping shape a cleaner, greener future.
                            </p>
                        )}
                    </div>
                    <div className={`transition-opacity duration-1000 ${activeTab === 'vision' ? 'opacity-100' : 'opacity-0'}`}>
                        {activeTab === 'vision' && (
                            <p className="mt-12 text-justify text-neutral-700 leading-8 text-[19px]" style={{ fontFamily: 'Open Sans,Arial,sans-serif' }}>
                                Our vision is to lead the global shift towards sustainable mobility by becoming the premier provider of electric bikes that redefine transportation. We aspire to create a world where electric vehicles are the norm, reducing carbon emissions and enhancing the quality of life for future generations, one ride at a time.
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9InJnYmEoMjMxLDIzOCwyNDUsMC40KSI+PHBhdGggZD0iTTAgMTQwaDEyODBDNTczLjA4IDE0MCAwIDAgMCAweiIvPjwvZz48L3N2Zz4=)] bg-no-repeat bg-cover h-[100px] bottom-0 z-1 transform scale-100">
                </div>
            </div>
        </div>
    );
}

export default About;
