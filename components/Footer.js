import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="main-footer" className="bg-neutral-900 text-neutral-300 pt-4">
            <div id="footer-bottom" className="max-w-screen-xl mx-auto px-10">
                <div className="flex justify-between items-center">
                    <div id="footer-info" className="text-center">
                        <p>
                            Copyright © 2024, KARTHIK&apos;S ELECTRIC FRONTIER. All rights reserved. | Designed &amp; Developed By
                            <a href="https://kreativdigimarketing.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline"> Kreativ Digi Marketing</a>
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
    );
};

export default Footer;
