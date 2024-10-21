"use client";
import React, { useState } from 'react';
import { FaArrowRight, FaPlus } from 'react-icons/fa';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        model: '-'
    });
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the range of PEV bikes on a single charge?",
            answer: "Our e-bikes can travel up to 100 kms on a single charge, depending on factors like terrain, rider weight, and the level of pedal assist used."
        },
        {
            question: "How long does it take to fully charge the battery?",
            answer: "The battery typically takes between 4 to 6 hours to charge fully, depending on the model and battery capacity."
        },
        {
            question: "Are the bikes suitable for off-road use?",
            answer: "Yes! PEV bikes are designed for both urban and off-road environments, featuring durable frames and suspension systems that handle varied terrains with ease."
        },
        {
            question: "Is the battery removable for charging?",
            answer: "Yes, the battery is easily removable, allowing you to charge it separately from the bike."
        }
    ];

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
                message: '',
                model: ''
            });
        } else {
            const result = await response.json();
            setError(result.error || 'Something went wrong.');
            setSuccess(null);
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 bg-cover bg-center md:p-[80px] p-12"
                style={{
                    backgroundImage: "url('https://karthikselectricfrontier.com/wp-content/uploads/2024/10/transportation-services-01.png')",
                    backgroundAttachment: 'fixed',
                }}>
                <div className="h-full flex flex-col justify-between">
                    <h4 className="md:text-2xl font-bold mb-4 new-head text-zinc-800">Frequently Asked Questions</h4>
                    <div className="py-5 flex-1 overflow-auto">
                        {faqs.map((item, index) => (
                            <div key={index} className="bg-white mb-4">
                                <div
                                    className={`flex justify-between items-center cursor-pointer p-4 rounded transition-all duration-1200`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h5 className="font-semibold">{item.question}</h5>
                                    <FaPlus className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`} />
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    <p className="text-slate-700 font-light pb-4 px-4">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 p-4 bg-neutral-800 md:p-[80px] p-14">
                <h3 className="text-2xl font-bold text-neutral-100 mb-8 new-head">Get a Free Quote -or- Ask a Question</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 mb-4 bg-neutral-700 focus:border-0 text-white"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 mb-4 bg-neutral-700 focus:border-0 text-white"
                        placeholder="Email Address"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 mb-4 bg-neutral-700 focus:border-0 text-white"
                        placeholder="Contact Number"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 mb-4 bg-neutral-700 focus:border-0 text-white"
                        placeholder="Message"
                        required
                    />
                    <div className="mb-4 flex items-center justify-end">
                        <span className="block mb-2 me-2 text-white">9 + 5 = </span>
                        <input
                            type="text"
                            className="w-16 p-2 me-4 bg-neutral-700 focus:border-0 text-white"
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
                    {success && <p className="text-green-500">{success}</p>}
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default FAQSection;
