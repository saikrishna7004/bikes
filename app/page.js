"use client"
import AboutInfo from '@/components/AboutInfo';
import DealershipSection from '@/components/Dealership';
import EcoFriendly from '@/components/EcoFriendly';
import FAQSection from '@/components/FAQ';
import PEVBikesSection from '@/components/PEV';
import PowerYourJourney from '@/components/PowerJourney';
import ElectricVehicles from '@/components/Vehicles';
import { useEffect, useState } from 'react';

export default function Home() {
    const [marginTop, setMarginTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newHeight = Math.max(-100, 100 - scrollY);
            setMarginTop(newHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                paddingTop: '200px',
                overflowY: 'hidden',
                marginTop: `${marginTop}px`,
            }}
        >
            <EcoFriendly />

            <AboutInfo />

            <PowerYourJourney />

            <DealershipSection />

            <ElectricVehicles />

            <PEVBikesSection />

            <FAQSection />
        </div>
    );
}
