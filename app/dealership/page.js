"use client";
import React, { useEffect, useState } from 'react';

const ContactUs = () => {
    const [marginTop, setMarginTop] = useState(0);

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

    return (
        <div className="mx-auto py-4" style={{ paddingTop: '200px', overflowY: 'hidden', marginTop: `${marginTop}px` }}>
            {/* Header Section */}
            <div
                className="bg-gray-800 text-white text-center py-8"
                style={{
                    backgroundImage: "linear-gradient(140deg, rgba(25, 36, 45, 0.7) 0%, #19242d 100%), url(https://karthikselectricfrontier.com/wp-content/uploads/2024/10/contact.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div style={{ padding: '10%' }}>
                    <img
                        src="https://karthikselectricfrontier.com/wp-content/uploads/2024/10/11.png"
                        alt="Logo"
                        className="mx-auto mb-4 w-30 h-30"
                    />
                    <h1 className="font-bold oswald" style={{ fontSize: '60px', fontWeight: 500 }}>Contact Us for Dealership</h1>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-8" style={{ paddingLeft: '13%' }}>
                <div className="md:w-3/8 p-4 bg-[#ea3900] text-white p-12">
                    <h2 className="text-[50px] text-bold mb-4 oswald">Get Started With Dealership Form</h2>
                    <form
                        method="post"
                        action="https://karthikselectricfrontier.com/dealership/"
                        className="py-6"
                    >
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            className="w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            className="w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <input
                            type="text"
                            id="contactNumber"
                            placeholder="Contact Number"
                            className="w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <div className="md:flex mb-4">
                            <input
                                type="text"
                                id="state"
                                placeholder="State"
                                className="md:w-1/2 text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 md:pr-2 mb-4 md:mb-0 md:me-4"
                                required
                            />
                            <input
                                type="text"
                                id="district"
                                placeholder="District"
                                className="md:w-1/2 text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 md:pl-2"
                                required
                            />
                        </div>
                        <textarea
                            id="address"
                            placeholder="Full Address"
                            className="w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <input
                            type="text"
                            placeholder="12 + 8"
                            className="w-20 text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="md:w-5/8" style={{ backgroundImage: "url(https://karthikselectricfrontier.com/wp-content/uploads/2024/10/sdfs.jpg)", backgroundPositionX: 'center' }}>
                    <h2 className="text-[30px] text-bold mb-4 oswald p-12 bg-[#19242d] text-white">+91-8520027796 | dealership@karthikselectricfrontier.com</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
