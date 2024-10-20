"use client";
import React, { useEffect, useState } from 'react';

const ContactUs = () => {
    const [marginTop, setMarginTop] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        state: '',
        district: '',
        address: '',
        captcha: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

        const response = await fetch('/api/dealership', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        setIsLoading(false);

        if (data.success) {
            setSuccessMessage('Message sent successfully!');
            setErrorMessage('');
            setFormData({
                fullName: '',
                email: '',
                contactNumber: '',
                state: '',
                district: '',
                address: '',
                captcha: '',
            });
        } else {
            setErrorMessage('Failed to send message. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="mx-auto pt-4" style={{ paddingTop: '200px', overflowY: 'hidden', marginTop: `${marginTop}px` }}>
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
                    <h3 className="md:text-[60px] text-[40px] oswald px-10">Contact Us for Dealership</h3>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-[-20px] md:pl-[13%]">
                <div className="md:w-3/8 bg-[#ea3900] text-white p-12">
                    <h2 className="text-[50px] text-bold mb-4 oswald">Get Started With Dealership Form</h2>
                    <form onSubmit={handleSubmit} className="py-6">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <input
                            type="text"
                            name="contactNumber"
                            placeholder="Contact Number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <div className="md:flex mb-4">
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleChange}
                                className="md:w-1/2 w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 md:pr-2 mb-4 md:mb-0 md:me-4"
                                required
                            />
                            <input
                                type="text"
                                name="district"
                                placeholder="District"
                                value={formData.district}
                                onChange={handleChange}
                                className="md:w-1/2 w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 md:pl-2"
                                required
                            />
                        </div>
                        <textarea
                            name="address"
                            placeholder="Full Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <input
                            type="text"
                            name="captcha"
                            placeholder="12 + 8"
                            value={formData.captcha}
                            onChange={handleChange}
                            className="w-20 text-white placeholder-white bg-[rgba(160,17,17,0.55)] p-4 mb-4"
                            required
                        />
                        <button type="submit" className="bg-yellow-600 text-white ms-2 py-4 px-8" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Submit'}
                        </button>
                    </form>
                    {successMessage && (
                        <div className="bg-white text-green-700 p-4 text-center mb-4 rounded shadow">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="bg-white text-red-700 p-4 text-center mb-4 rounded shadow">
                            {errorMessage}
                        </div>
                    )}
                </div>

                <div className="md:w-5/8" style={{ backgroundImage: "url(https://karthikselectricfrontier.com/wp-content/uploads/2024/10/sdfs.jpg)", backgroundPositionX: 'center', backgroundSize: 'cover', minHeight: '400px' }}>
                    <h2 className="text-[36px] text-bold mb-4 oswald p-8 bg-[#19242d] text-white break-words text-center">+91-8520027796 | dealership@karthikselectricfrontier.com</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
