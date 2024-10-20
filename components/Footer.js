"use client"
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="bg-black py-8">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex md:flex-row flex-col">
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
            <footer id="main-footer" className="bg-neutral-900 text-neutral-300 pt-4">
                <div id="footer-bottom" className="max-w-screen-xl mx-auto px-10">
                    <div className="flex justify-between items-center">
                        <div id="footer-info" className="text-center">
                            <p>
                                Copyright © 2024, KARTHIK&apos;S ELECTRIC FRONTIER. All rights reserved. | Designed &amp; Developed By&nbsp;
                                <a href="https://instagram.com/saikrishna7004" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Sai Krishna Karnati</a>
                            </p>
                        </div>
                        <div id="footer-social" className="flex pb-2">
                            <a className="mx-3" href="https://www.facebook.com/karthikselectricfrontier" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </a>
                            <a className="mx-3" href="https://www.instagram.com/karthikselectricfrontier/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCvWjzX2j8d4t5eTJ8YQ8J9Q" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube text-white text-2xl mx-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
