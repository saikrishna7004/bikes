"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { NavLink } from './NavLink';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {data: session} = useSession();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/gallery", label: "Gallery" },
        { href: "/about-us", label: "About us" },
        { href: "/dealership", label: "Dealership" },
        { href: "/contact-us", label: "Contact us" },
        ...(session ? [{ href: "/admin", label: "Admin" }] : []),
    ];

    return (
        <header className="bg-white fixed top-0 left-0 w-full shadow z-50">
            <div className="container mx-auto flex justify-between items-center lg:px-[100px] sm:px-0 px-[50px]">
                <div className="logo_container py-2">
                    <Link href="/">
                        <Image
                            src="/logo.jpg"
                            width={200}
                            height={100}
                            alt="Devashree PEV"
                            className="h-auto"
                        />
                    </Link>
                </div>
                <nav className="hidden md:flex flex-grow justify-end">
                    <ul className="flex space-x-8 new-text font-semibold">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <NavLink href={href} exact className="text-gray-700 link">{label}</NavLink>
                            </li>
                        ))}
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
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} className="text-gray-700 hover:text-[#ea3900]">{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
