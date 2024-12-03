'use client';
import { useState } from 'react';
import Image from 'next/image';
import deleteImage from '@/utils/deleteImage';
import updateAltText from '@/utils/updateAltText';

const ImageManager = ({ initialImages }) => {
    const [images, setImages] = useState(initialImages);
    const [imageToUpload, setImageToUpload] = useState(null);
    const [altText, setAltText] = useState('');
    const [uploading, setUploading] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newAltText, setNewAltText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [message, setMessage] = useState('');
    console.log("images", images);
    const handleUpload = async (e) => {
        e.preventDefault();

        console.log(imageToUpload, altText.trim())

        if (!imageToUpload || !altText.trim()) {
            setMessage('Please select an image and provide alt text.');
            return;
        }

        setUploading(true);
        setMessage('');

        const formData = new FormData();
        formData.append('image', imageToUpload);
        formData.append('alt', altText);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                console.log(images)
                setImages((prev) => [
                    ...prev,
                    { _id: result._id, url: result.url, alt: altText, publicId: result.publicId },
                ]);
                setMessage('Image uploaded successfully!');
            } else {
                setMessage(result.message || 'Failed to upload image.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            setMessage('Failed to upload image.');
        } finally {
            setUploading(false);
            setImageToUpload(null);
            setAltText('');
        }
    };

    const handleDelete = async (imageId) => {
        setDeleting(true);
        try {
            const image = images.find((img) => img._id === imageId);
            await deleteImage(image);
            setImages((prev) => prev.filter((img) => img._id !== imageId));
            setShowModal(false);
        } catch (error) {
            console.error('Failed to delete the image:', error);
        } finally {
            setDeleting(false);
        }
    };

    const handleEdit = async () => {
        setEditing(true);
        try {
            await updateAltText(selectedImage._id, newAltText);
            setImages((prev) =>
                prev.map((img) =>
                    img._id === selectedImage._id ? { ...img, alt: newAltText } : img
                )
            );
            setShowModal(false);
        } catch (error) {
            console.error('Failed to update alt text:', error);
        } finally {
            setEditing(false);
        }
    };

    return (
        <div>
            <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Upload Image</h2>
                <form onSubmit={handleUpload}>
                    <input
                        type="file"
                        onChange={(e) => setImageToUpload(e.target.files[0])}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <input
                        type="text"
                        value={altText}
                        onChange={(e) => setAltText(e.target.value)}
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
                {message && <p className="mt-4 text-center text-green-500">{message}</p>}
            </div>

            <div className="mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Existing Images</h2>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [&>div]:mt-2">
                    {images.length ? (
                        images.map((img) => (
                            <div
                                key={img._id}
                                className="relative group w-full h-auto overflow-hidden rounded-md shadow-md"
                                style={{ display: 'inline-block', position: 'relative' }}
                            >
                                <Image
                                    src={img.url}
                                    alt={img.alt}
                                    className="w-full rounded"
                                    width={500}
                                    height={500}
                                />
                                <div className="absolute top-1 right-1 p-2 opacity-0 group-hover:opacity-100 z-30">
                                    <button
                                        onClick={() => {
                                            setSelectedImage(img);
                                            setNewAltText(img.alt);
                                            setShowModal(true);
                                        }}
                                        className="bg-blue-500 text-white p-1 rounded-full"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="absolute inset-0 bg-black opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-60"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-shadow-md">{img.alt}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No images found.</p>
                    )}
                </div>
            </div>

            {showModal && selectedImage && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-40">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="text-xl font-bold mb-4">Edit or Delete Image</h3>
                        <div className="mb-4">
                            <label htmlFor="altText" className="block mb-2 text-lg">Edit Alt Text</label>
                            <input
                                type="text"
                                id="altText"
                                value={newAltText}
                                onChange={(e) => setNewAltText(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                disabled={editing}
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleEdit}
                                className="bg-blue-500 text-white p-2 rounded-md"
                                disabled={editing}
                            >
                                {editing ? 'Saving...' : 'Save'}
                            </button>
                            <button
                                onClick={() => handleDelete(selectedImage._id)}
                                className="bg-red-500 text-white p-2 rounded-md"
                                disabled={deleting}
                            >
                                {deleting ? 'Deleting...' : 'Delete'}
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-300 text-black p-2 rounded-md"
                                disabled={deleting || editing}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageManager;
