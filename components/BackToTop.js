"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-0 right-0 bg-black text-white rounded-s-full px-4 py-2 mb-[71px] z-50 items-center text-xs flex gap-2 scrollToTopButton ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            BACK TO TOP
            <FaArrowCircleUp className="inline-block h-4 w-4" />
        </button>
    )
}

export default BackToTop
