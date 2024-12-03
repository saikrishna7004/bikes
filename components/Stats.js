"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const useAnimatedCount = (target) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let increment = Math.ceil(target / 100);
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev + increment >= target) {
                    clearInterval(interval);
                    return target;
                }
                return prev + increment;
            });
        }, 10);
        return () => clearInterval(interval);
    }, [target]);
    return count;
};

const StatsSection = ({ stats }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const totalSold = useAnimatedCount(isVisible ? stats.totalSold : 0);
    const totalRevenue = useAnimatedCount(isVisible ? stats.totalRevenue : 0);

    return (
        <div ref={ref} className="bg-[#A0E2D5] py-8 mt-14">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-12">
                <div className="flex flex-wrap justify-around w-full">
                    <div className="text-center p-6 m-2">
                        <div className="head">{isVisible ? totalSold : 0}+</div>
                        <p className="text-lg mt-2">Products Sold</p>
                    </div>
                    <div className="text-center p-6 m-2">
                        <div className="head">{isVisible ? `₹${totalRevenue}` : '₹0'}</div>
                        <p className="text-lg mt-2">Total Revenue</p>
                    </div>
                    <div className="text-center p-6 m-2">
                        <span className="head">{stats.mostPopular}</span>
                        <p className="text-lg mt-2">Most Popular</p>
                    </div>
                    <div className="text-center p-6 m-2">
                        <span className="head">{stats.customerSatisfaction}%</span>
                        <p className="text-lg mt-2">Customer Satisfaction</p>
                    </div>
                </div>
            </div>
            <div className="text-center pb-12">
                <Link href="/about-us" className="inline-flex items-center text-[#A0E2D5] py-4 pe-4 ps-10 bg-black text-2xl bebas relative group transition-all duration-300">
                    READ MORE
                    <FaArrowRight className='ml-2 transform -translate-x-full opacity-0 group-hover:translate-x-0 text-md group-hover:opacity-100 transition-all duration-300' />
                </Link>
            </div>
        </div>
    );
};

export default StatsSection;
