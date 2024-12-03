import StatsEditPage from '@/components/StatsEditPage';
import { fetchStats } from '@/utils/fetchStats';

const StatsPage = async () => {
    let stats = await fetchStats();
    stats = JSON.parse(stats);

    return (
        <div className="mx-auto montserrat mb-10" style={{ paddingTop: '150px', overflowY: 'hidden' }}>
            <h1 className="text-4xl font-bold mb-4 text-center">Stats</h1>
            <StatsEditPage initialStats={stats || {}} />
        </div>
    );
};

export default StatsPage;
