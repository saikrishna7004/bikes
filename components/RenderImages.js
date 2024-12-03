import React from 'react';
import ImageText from './ImageText';

const RenderImages = ({ images }) => {
    return (
        <div>
            {images?.length ? (
                images.map((img) => (
                    <ImageText img={img} key={img.id} cross={true} />
                ))
            ) : (
                <p className="text-center">No images found.</p>
            )}
        </div>
    );
};

export default RenderImages;