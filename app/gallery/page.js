import React from 'react';
import { getImages } from '@/utils/getImages';
import Image from 'next/image';

const Gallery = async () => {
    const images = await getImages();

    return (
        <div className="mx-auto montserrat" style={{ paddingTop: '95px', overflowY: 'hidden' }}>
            <div className="p-5 sm:p-8">
            <h1 className="md:text-4xl text-2xl font-bold mb-4 text-center">Gallery</h1>
                <div className="columns-1 sm:columns-2 gap-4 md:columns-3 lg:columns-4 [&>div]:mt-4">
                    {images?.length ? (
                        images.map((img, index) => (
                            <div
                                key={img.id}
                                className="relative group w-full h-auto overflow-hidden rounded-md shadow-md"
                                style={{ display: 'inline-block', position: 'relative' }}
                            >
                                <Image
                                    src={img.url}
                                    alt={img.alt}
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                    width={1080}
                                    height={768}
                                />
                                <div className="absolute inset-0 bg-black opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-60"></div>
                                <div 
                                    className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-shadow-md">{img.alt}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No images found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
