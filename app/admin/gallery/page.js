import ImageManager from '@/components/ImageManager';
import { getImages } from '@/utils/getImages';

export default async function Page() {
    const images = await getImages();

    return (
        <div className="mx-auto montserrat" style={{ paddingTop: '150px', overflowY: 'hidden' }}>
            <h1 className="text-4xl font-bold mb-4 text-center">Gallery</h1>
            <ImageManager initialImages={images} />
        </div>
    );
}
