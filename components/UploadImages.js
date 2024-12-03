'use client'

import { useState } from 'react';
import Image from 'next/image';

export default function UploadImages() {
    const [image, setImage] = useState(null);
    const [alt, setAlt] = useState('');
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleAltChange = (e) => {
        setAlt(e.target.value);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!image) return;

        setUploading(true);

        const formData = new FormData();
        formData.append('image', image);
        formData.append('alt', alt);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await res.json();
            if (res.ok) {
                setImageUrl(result.url);
                setMessage('Image uploaded successfully!');
            } else {
                setMessage(result.message || 'Upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            setMessage('Error uploading image.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Upload Image</h2>
            <form onSubmit={handleUpload}>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <input
                    type="text"
                    value={alt}
                    onChange={handleAltChange}
                    placeholder="Enter alt text"
                    className="mt-4 block w-full text-sm text-gray-500 border border-gray-300 rounded py-2 px-4"
                />
                <button
                    type="submit"
                    disabled={uploading}
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {uploading ? 'Uploading...' : 'Upload Image'}
                </button>
            </form>
            {message && <p className="mt-4 text-center text-green-500 !pb-0">{message}</p>}
            {imageUrl && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Uploaded Image</h3>
                    <Image src={imageUrl} alt={alt} className="mt-2 w-full rounded" width={500} height={500} />
                    <p className="mt-2 text-center">{alt}</p>
                </div>
            )}
        </div>
    );
}
