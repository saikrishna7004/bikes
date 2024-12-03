import Link from 'next/link';
import { getServerSession } from 'next-auth';
import Logout from '@/components/Logout';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
    const session = await getServerSession();
    
    if(!session) {
        return redirect('/404');
    }

    return (
        <div className="mx-auto montserrat" style={{ paddingTop: '95px', overflowY: 'hidden' }}>
            <div className="container mx-auto py-12">
                <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
                {session && (
                    <div className="text-right mb-4">
                        <Logout />
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Edit Gallery</h2>
                        <Link href="/admin/gallery" className="text-blue-500 hover:underline">
                            Go to Edit Gallery
                        </Link>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Edit Stats</h2>
                        <Link href="/admin/stats" className="text-blue-500 hover:underline">
                            Go to Edit Stats
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}