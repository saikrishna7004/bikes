"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [imageHeight, setImageHeight] = useState(200);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) {
                const scrollY = window.scrollY;
                const newHeight = Math.max(80, 200 - scrollY);
                setImageHeight(newHeight);
            }
        };

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setImageHeight(100);
            } else {
                handleScroll();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="bg-white fixed top-0 left-0 w-full shadow z-50">
            <div className="container mx-auto flex justify-between items-center md:px-[160px] px-[50px]">
                <div className="logo_container">
                    <a href="/">
                        <Image
                            src="https://karthikselectricfrontier.com/wp-content/uploads/2024/10/logo.png"
                            width={imageHeight}
                            height={imageHeight}
                            alt="Karthik's Electric Frontier"
                            className="h-auto"
                        />
                    </a>
                </div>
                <nav className="hidden md:flex flex-grow justify-end">
                    <ul className="flex space-x-8 new-text font-semibold">
                        <li><NavLink href="/" exact className="text-gray-700 link">Home</NavLink></li>
                        <li><NavLink href="/about-us" className="text-gray-700 link">About us</NavLink></li>
                        <li><NavLink href="/dealership" className="text-gray-700 link">Dealership</NavLink></li>
                        <li><NavLink href="/contact-us" className="text-gray-700 link">Contact us</NavLink></li>
                    </ul>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-lg">
                    <ul className="flex flex-col space-y-2 p-4">
                        <li><Link href="/" className="text-gray-700 hover:text-[#ea3900]">Home</Link></li>
                        <li><Link href="/about-us" className="text-gray-700 hover:text-[#ea3900]">About us</Link></li>
                        <li><Link href="/dealership" className="text-gray-700 hover:text-[#ea3900]">Dealership</Link></li>
                        <li><Link href="/contact-us" className="text-gray-700 hover:text-[#ea3900]">Contact us</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
