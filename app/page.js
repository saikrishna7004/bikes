import AboutInfo from '@/components/AboutInfo';
import DealershipSection from '@/components/Dealership';
import EcoFriendly from '@/components/EcoFriendly';
import FAQSection from '@/components/FAQ';
import PEVBikesSection from '@/components/PEV';
import PowerYourJourney from '@/components/PowerJourney';
import ElectricVehicles from '@/components/Vehicles';
import Stats from '@/components/Stats';
import { fetchStats } from '@/utils/fetchStats';

export default async function Home() {
    const stats_json = await fetchStats();
    const stats = JSON.parse(stats_json);

    return (
        <div style={{ paddingTop: '95px', overflowY: 'hidden', marginTop: '20px' }}>
            <EcoFriendly />

            <Stats stats={stats} />

            <AboutInfo />

            <PowerYourJourney />

            <DealershipSection />

            <ElectricVehicles />

            <PEVBikesSection />

            <FAQSection />
        </div>
    );
}
