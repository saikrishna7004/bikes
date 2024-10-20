import React, { useEffect, useRef, useState } from 'react';

const ElectricVehicles = () => {
    const vehicles = [
        { name: "PEV S1 PRO", price: "49,999/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-2.png" },
        { name: "PEV STELLA", price: "67,000/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-3.png" },
        { name: "PEV ULTRA 1.5", price: "73,000/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-4.png" },
        { name: "PEV STELLA X1", price: "74,000/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-5.png" },
        { name: "PEV RIDER 1.2", price: "84,000/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-6.png" },
        { name: "PEV PANTHER", price: "76,500/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-7.png" },
        { name: "PEV PRO N", price: "80,500/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-8.png" },
        { name: "PEV 3V", price: "84,500/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-9.png" },
        { name: "PEV PHANTOM S", price: "96,000/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-10.png" },
        { name: "PEV PHANTOM D", price: "98,500/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-11.png" },
        { name: "PEV HIGHRIDER", price: "1,30,000/-", imgSrc: "https://karthikselectricfrontier.com/wp-content/uploads/2024/10/Untitled-design-12.png" },
    ];

    const [visibleImages, setVisibleImages] = useState(Array(vehicles.length).fill(false));
    const refs = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = entry.target.dataset.index;
                    setVisibleImages((prev) => {
                        const newVisible = [...prev];
                        newVisible[index] = true;
                        return newVisible;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        refs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            refs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [refs]);

    return (
        <div className="bg-gray-100 py-10">
            <div className="text-center mb-8">
                <h3 className="md:text-4xl text-2xl font-bold md:mx-20 mx-4 leading-6">
                    Redefine Your Ride: Discover the<br /> Next Generation of Electric Mobility
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto custom-container">
                {vehicles.map((vehicle, index) => (
                    <div
                        key={index}
                        className="bg-white px-4 py-20 text-center"
                        ref={el => refs.current[index] = el}
                        data-index={index}
                    >
                        <h3 className="text-3xl font-semibold mb-2">{vehicle.name}</h3>
                        <h5 className="text-orange-600 font-bold">Price starts from: {vehicle.price}</h5>
                        {visibleImages[index] && ( 
                            <img className="my-10 w-100 h-100 mx-auto object-contain rounded px-4" src={vehicle.imgSrc} alt={vehicle.name} />
                        )}
                        <a href="https://karthikselectricfrontier.com/contact-us/" className="mt-2 inline-block px-8 py-4 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600">GET A QUOTE</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ElectricVehicles;
