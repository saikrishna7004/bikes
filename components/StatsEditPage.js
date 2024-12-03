'use client';
import React, { useState, useEffect } from 'react';
import { fetchStats } from '@/utils/fetchStats';
import updateStats from '@/utils/updateStats';

const StatsEditPage = ({ initialStats = {} }) => {
    const [stats, setStats] = useState(initialStats);

    useEffect(() => {
        fetchStats();
        console.log(stats, initialStats);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStats({ ...stats, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit", stats);
        for (const [key, value] of Object.entries(stats)) {
            if (value === null || value === '') {
                alert(`Value for "${key}" is empty. Please fill and submit again.`);
                return ;
            }
        }
        const updatedStats = updateStats(stats);
        setStats(updatedStats);
        alert('Stats updated successfully');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Stats</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Total Sold</label>
                    <input
                        type="number"
                        name="totalSold"
                        value={stats.totalSold}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Total Revenue</label>
                    <input
                        type="number"
                        name="totalRevenue"
                        value={stats.totalRevenue}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Most Popular</label>
                    <input
                        type="text"
                        name="mostPopular"
                        value={stats.mostPopular}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Customer Satisfaction</label>
                    <input
                        type="number"
                        name="customerSatisfaction"
                        value={stats.customerSatisfaction}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default StatsEditPage;
