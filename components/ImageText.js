"use client";
import Image from "next/image";
import { useState } from "react";
import deleteImage from "@/utils/deleteImage";
import updateAltText from "@/utils/updateAltText";

const ImageText = ({ img }) => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newAltText, setNewAltText] = useState(img.alt);
    const [alt, setAlt] = useState(img.alt);
    const [show, setShow] = useState(true)

    const handleDelete = async () => {
        setLoading(true);
        try {
            await deleteImage(img);
            console.log("Image deleted successfully!");
            setShow(false);
            setShowModal(false); 
        } catch (error) {
            console.error("Failed to delete the image:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = async () => {
        setLoading(true);
        try {
            await updateAltText(img._id, newAltText);
            console.log("Alt text updated successfully!");
            setAlt(newAltText);
            setShowModal(false);
        } catch (error) {
            console.error("Failed to update alt text:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`relative group w-full h-auto overflow-hidden rounded-md shadow-md ${!show && '!hidden'}`} style={{ display: "inline-block", position: "relative" }}>
            <Image src={img.url} alt={alt} className="w-full rounded" width={500} height={500} />
            <div className="absolute top-1 right-1 p-2 opacity-0 group-hover:opacity-100 z-30">
                <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-shadow-md">{alt}</span>
            </div>

            {showModal && (
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
                                disabled={loading}
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button 
                                onClick={() => handleEdit()} 
                                className="bg-blue-500 text-white p-2 rounded-md" 
                                disabled={loading}
                            >
                                {loading ? "Saving..." : "Save"}
                            </button>
                            <button 
                                onClick={() => handleDelete()} 
                                className="bg-red-500 text-white p-2 rounded-md" 
                                disabled={loading}
                            >
                                {loading ? "Deleting..." : "Delete"}
                            </button>
                            <button 
                                onClick={() => setShowModal(false)} 
                                className="bg-gray-300 text-black p-2 rounded-md"
                                disabled={loading}
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

export default ImageText;
