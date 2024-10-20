"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaEnvelope, FaLocationArrow, FaMailchimp, FaMapPin, FaPhone } from 'react-icons/fa';

const About = () => {
    const [marginTop, setMarginTop] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        model: '',
        message: '',
        captcha: ''
    });
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // New loading state

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newHeight = Math.max(0, -scrollY);
            setMarginTop(newHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        setIsLoading(false);

        if (response.ok) {
            setSuccess('Email sent successfully!');
            setError(null);
            setFormData({
                name: '',
                email: '',
                phone: '',
                model: '',
                message: '',
                captcha: ''
            });
        } else {
            const result = await response.json();
            setError(result.error || 'Something went wrong.');
            setSuccess(null);
        }
    };

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
                    <h1 className="md:text-[50px] text-[40px] font-bold">Contact Us</h1>
                </section>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:px-[15%] py-[100px] p-10" style={{
                    backgroundSize: "initial", backgroundPosition: "left top",
                    backgroundImage: "url(https://karthikselectricfrontier.com/wp-content/uploads/2024/10/transportation-services-05.png)"
                }}>
                    <div className="flex flex-col pt-10">
                        <h2 className="text-[50px] leading-14 font-bold text-neutral-800 mb-8">Reach Us</h2>
                        <div className="flex mb-6">
                            <div className="text-3xl mb-2 me-6 text-[#f1580c]"><FaMapPin /></div>
                            <h4 className="text-center font-bold">
                                4-84, Brindhavan Nagar, Street No.8, Habsiguda, Hyderabad - 500007
                            </h4>
                        </div>
                        <div className="flex mb-6">
                            <div className="text-3xl mb-2 me-6 text-[#f1580c]"><FaPhone /></div>
                            <h4 className="mx-auto font-bold">+91-8520027796 | +91-9566560926</h4>
                        </div>
                        <div className="flex mb-6">
                            <div className="text-3xl mb-2 me-6 text-[#f1580c]"><FaEnvelope /></div>
                            <p className="mx-auto font-bold">info@karthikselectricfrontier.com</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-10 bg-neutral-800 text-white">
                        <h1 className="text-[50px] font-bold mb-6">Get a Quote</h1>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="w-full p-4 mb-4 bg-black text-white placeholder-white" 
                                placeholder="Name" 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="w-full p-4 mb-4 bg-black text-white placeholder-white" 
                                placeholder="Email Address" 
                                required 
                            />
                            <input 
                                type="text" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                className="w-full p-4 mb-4 bg-black text-white placeholder-white" 
                                placeholder="Phone Number" 
                                pattern="[0-9\s\-]*" 
                                title="Only numbers allowed." 
                                required 
                            />
                            <select 
                                name="model" 
                                value={formData.model} 
                                onChange={handleChange} 
                                className="w-full p-4 mb-4 bg-black text-white placeholder-white" 
                                required
                            >
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
                            <textarea 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                className="w-full p-4 mb-4 bg-black text-white placeholder-white" 
                                placeholder="Message" 
                                required 
                            />
                            <div className="mb-4 flex items-center justify-end">
                                <span className="block mb-2 me-2 text-white placeholder-white">9 + 5 = </span>
                                <input 
                                    type="text" 
                                    name="captcha" 
                                    value={formData.captcha} 
                                    onChange={handleChange} 
                                    className="w-16 p-4 me-4 bg-black text-white" 
                                    required 
                                />
                                <button type="submit" className="bg-white text-neutral-700 font-bold p-4 pl-8 rounded hover:bg-neutral-200 flex items-center group transition-all duration-300" disabled={isLoading}>
                                    {isLoading ? (
                                        <span>Loading...</span>
                                    ) : (
                                        <>
                                            Submit
                                            <FaArrowRight className='ml-2 transform -translate-x-full opacity-0 group-hover:translate-x-0 text-md group-hover:opacity-100 transition-all duration-300' />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                        {success && <p className="text-green-500">{success}</p>}
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
