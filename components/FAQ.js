"use client"
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

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
                <form className="" method="post" action="https://karthikselectricfrontier.com/">
                    <input type="text" id="name" className="w-full p-4 mb-4 bg-neutral-700 focus:border-0 text-white" placeholder="Name" required />
                    <input type="email" id="email" className="w-full p-4 mb-4 bg-neutral-700 focus:border-0 text-white" placeholder="Email Address" required />
                    <input type="text" id="contact" className="w-full p-4 mb-4 bg-neutral-700 focus:border-0 text-white" placeholder="Contact Number" required />
                    <textarea id="message" className="w-full p-4 mb-4 bg-neutral-700 focus:border-0 text-white" placeholder="Message" required></textarea>
                    <div className="mb-4 flex items-center justify-end">
                        <span className="block mb-2 me-2 text-white">9 + 5 = </span>
                        <input type="text" className="w-16 p-2 me-4 bg-neutral-700 focus:border-0 text-white" required />
                        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FAQSection;
