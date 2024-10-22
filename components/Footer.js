"use client"
import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaFacebook, FaGlobe, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="bg-black py-8">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex md:flex-row flex-col">
                        <div className="md:w-2/4 text-white p-6">
                            <h3 className="sub-head-2 text-neutral-400 pb-2">Phone</h3>
                            <p className="footer-head mt-2">+91-9959113045</p>
                            <p className="footer-head ">+91-8985481508</p>
                            <h3 className="sub-head-2 text-neutral-400 pb-2 mt-4">Email</h3>
                            <p className="footer-text mt-2">devashreepev@gmail.com</p>
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
                            <p className="mt-6 pt-2">55-4-659/1, Opp Balaji Gardens, Erragattugutta, Hanamkonda, Telangana - 506015</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="main-footer" className="bg-neutral-900 text-neutral-300 pt-4">
                <div id="footer-bottom" className="max-w-screen-xl mx-auto px-10">
                    <div className="flex justify-between items-center">
                        <div id="footer-info" className="text-center">
                            <p>
                                Copyright © 2024, DEVASHREE PEV. All rights reserved. | Designed &amp; Developed By&nbsp;
                                <a href="https://instagram.com/saikrishna7004" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Sai Krishna Karnati</a>
                            </p>
                        </div>
                        <div id="footer-social" className="flex pb-6">
                            <a className="mx-3" href="https://www.devashreepev.com" target="_blank" rel="noopener noreferrer">
                                <FaGlobe size={24} />
                            </a>
                            <a className="mx-3" href="mailto:devashreepev@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope size={24} />
                            </a>
                            <a className="mx-3" href="https://www.facebook.com/profile.php?id=61567064468328" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </a>
                            <a className="mx-3" href="https://www.instagram.com/devashreepev" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
