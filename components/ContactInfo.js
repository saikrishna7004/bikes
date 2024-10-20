import Link from 'next/link';
import React from 'react';

const ContactInfo = () => {
    return (
        <div className="bg-black py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex">
                    <div className="md:w-2/4 text-white p-6">
                        <h3 className="sub-head-2 text-neutral-400 pb-2">Phone</h3>
                        <p className="footer-head mt-2">+91-8520027796</p>
                        <p className="footer-head ">+91-9566560926</p>
                        <h3 className="sub-head-2 text-neutral-400 pb-2 mt-4">Email</h3>
                        <p className="footer-text mt-2">info@karthikselectricfrontier.com</p>
                    </div>

                    <div className="md:w-1/4 text-white p-6">
                        <h4 className="sub-head-2 text-neutral-400">Company</h4>
                        <div className="h-2 bg-[#ea3900] mt-3 mb-6 h-[5px]"></div>
                        <div className="mt-6 pt-2">
                            <Link href="/about-us" className="text-white text-lg hover:text-[#ea3900]">About Us</Link>
                        </div>
                        <div className="mt-4">
                            <Link href="/contact-us" className="text-white text-lg hover:text-[#ea3900]">Contact Us</Link>
                        </div>
                    </div>

                    <div className="md:w-1/4 text-white p-6">
                        <h4 className="sub-head-2 text-neutral-400">ADDRESS</h4>
                        <div className="h-2 bg-[#ea3900] mt-3 mb-6 h-[5px]"></div>
                        <p className="mt-6 pt-2">4-84, Brindhavan Nagar, Street No.8, Habsiguda, Hyderabad – 500007</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
