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

    return (
        <div style={{ paddingTop: '95px', overflowY: 'hidden', marginTop: '20px' }}>
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
