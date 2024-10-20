"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaEnvelope, FaLocationArrow, FaMailchimp, FaMapPin, FaPhone, FaVoicemail } from 'react-icons/fa';

const About = () => {
    const [marginTop, setMarginTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newHeight = Math.max(0, - scrollY);
            setMarginTop(newHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mx-auto montserrat" style={{ paddingTop: '200px', overflowY: 'hidden', marginTop: `${marginTop}px` }}>
            <div className='mx-auto'>
                <section className="text-center text-white relative bg-[url('https://karthikselectricfrontier.com/wp-content/uploads/2024/10/transportation-services-18.png')] bg-cover bg-no-repeat bg-blend-multiply"
                    style={{
                        padding: '80px',
                        backgroundColor: '#f1580c',
                        backgroundSize: 'initial',
                        backgroundPosition: 'left bottom 0px',
                        backgroundBlendMode: 'multiply'
                    }}
                >
                    <h1 className="text-700 text-[60px] font-bold">Contact Us</h1>
                </section>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:px-[15%] py-[100px] p-10" style={{
                    backgroundSize: "initial", backgroundPosition: "left top",
                    backgroundImage: "url(https://karthikselectricfrontier.com/wp-content/uploads/2024/10/transportation-services-05.png)"
                }}>
                    <div className="flex flex-col">
                        <h2 className="text-[50px] leading-14 font-bold text-neutral-800 mb-8">Reach Us</h2>

                        <div className="flex mb-6">
                            <div className="text-3xl mb-2 me-4 text-[#f1580c]"><FaMapPin /></div>
                            <h4 className="text-lg font-semibold">
                                4-84, Brindhavan Nagar, Street No.8, Habsiguda, Hyderabad - 500007
                            </h4>
                        </div>

                        <div className="flex mb-6">
                            <div className="text-3xl mb-2 me-4 text-[#f1580c]"><FaPhone /></div>
                            <h4 className="text-lg font-semibold">+91-8520027796 | +91-9566560926</h4>
                        </div>

                        <div className="flex mb-6">
                            <div className="text-3xl mb-2 me-4 text-[#f1580c]"><FaEnvelope /></div>
                            <h4 className="text-lg font-semibold">info@karthikselectricfrontier.com</h4>
                        </div>

                        <div className="flex mb-6">
                            <div className="text-3xl mb-2 me-4 text-[#f1580c]"><FaEnvelope /></div>
                            <h4 className="text-lg font-semibold">dealership@karthikselectricfrontier.com</h4>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-10 bg-neutral-800 text-white">
                        <h1 className="text-[50px] font-bold mb-6">Get a Quote</h1>
                        <form method="post" action="https://karthikselectricfrontier.com/contact-us/">
                            <input type="text" id="full_name" className="w-full p-4 mb-4 bg-black focus:border-0 text-white" placeholder="Name" required />

                            <input type="email" id="email_address" className="w-full p-4 mb-4 bg-black focus:border-0 text-white" placeholder="Email Address" required />

                            <input type="text" id="phone_number" className="w-full p-4 mb-4 bg-black focus:border-0 text-white" placeholder="Phone Number" pattern="[0-9\s\-]*" title="Only numbers allowed." required />

                            <select id="model" className="w-full p-4 mb-4 bg-black focus:border-0 text-white" required>
                                <option value="">What are you looking for</option>
                                <option value="PEV S1 PRO">PEV S1 PRO</option>
                                <option value="PEV STELLA">PEV STELLA</option>
                                <option value="PEV ULTRA 1.5">PEV ULTRA 1.5</option>
                                <option value="PEV STELLA X1">PEV STELLA X1</option>
                                <option value="PEV RIDER 1.2">PEV RIDER 1.2</option>
                                <option value="PEV PANTHER">PEV PANTHER</option>
                                <option value="PEV PRO N">PEV PRO N</option>
                                <option value="PEV 3V">PEV 3V</option>
                                <option value="PEV PHANTOM S">PEV PHANTOM S</option>
                                <option value="PEV PHANTOM D">PEV PHANTOM D</option>
                                <option value="PEV HIGHRIDER">PEV HIGHRIDER</option>
                            </select>
                            <textarea id="message" className="w-full p-4 mb-4 bg-black focus:border-0 text-white" placeholder="Message" required></textarea>

                            <div className="mb-4 flex items-center justify-end">
                                <span className="block mb-2 me-2 text-white">9 + 5 = </span>
                                <input type="text" className="w-16 p-2 me-4 bg-neutral-700 focus:border-0 text-white" required />
                                <button type="submit" className="bg-white text-neutral-700 font-bold p-4 pl-8 rounded hover:bg-neutral-200 flex items-center group transition-all duration-300">Submit
                                    <FaArrowRight className='ml-2 transform -translate-x-full opacity-0 group-hover:translate-x-0 text-md group-hover:opacity-100 transition-all duration-300' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;
