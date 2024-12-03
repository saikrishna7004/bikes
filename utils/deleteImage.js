'use server';
import Image from "@/models/Images";
import connectMongo from "@/utils/connectMongo";
import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function deleteImageFromCloudinary(publicId) {
    console.log(publicId);
    try {
        const deleteResult = await cloudinary.v2.uploader.destroy(publicId, {
            invalidate: true,
            resource_type: 'image',
        });
        console.log(deleteResult);
        return deleteResult;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default async function deleteImage(image) {
    await connectMongo();
    // console.log(image);

    try {
        const imageDoc = await Image.findById(image);
        console.log(imageDoc)
        if (imageDoc) {
            const cloudinaryResult = await deleteImageFromCloudinary(imageDoc.publicId);

            if (cloudinaryResult?.result === 'ok') {
                await imageDoc.deleteOne();
                console.log(`Server: Deleted image with ID: ${image._id}`);
            }
        }
    } catch (error) {
        console.error("Error deleting image:", error);
    }

    return { success: true };
}
