import React from 'react';
import Link from 'next/link';

const DealershipSection = () => {
    return (
        <div className="bg-[#ea3900] py-10">
            <div className="container mx-auto flex flex-wrap justify-center py-10">
                <div className="w-full md:w-3/4 text-center mb-4">
                    <p className="font-bold text-white">
                        We are Distributors of PEV ELECTRIC Vehicles in Telangana and Andhra Pradesh
                    </p>
                    <h2 className="text-white mt-2 head">
                        Contact us for dealership opportunities
                    </h2>
                    <h2 className="text-white mt-2 head">
                        in AP and Telangana
                    </h2>
                </div>
                <div className="w-full md:w-1/4 flex justify-center items-center">
                    <div className="mt-4">
                        <Link href="https://karthikselectricfrontier.com/dealership/">
                            <button className="border-2 sub-head-2 text-white py-2 px-8 rounded transition">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealershipSection;
