'use server';
import Image from "@/models/Images";
import connectMongo from "@/utils/connectMongo";

export default async function updateAltText(imageId, newAltText) {
    await connectMongo();

    try {
        const image = await Image.findById(imageId);
        console.log(image)
        if (!image) {
            throw new Error("Image not found");
        }

        image.alt = newAltText;
        await image.save();

        console.log(`Server: Updated alt text for image ID: ${imageId} to: ${newAltText}`);
        return { success: true };
    } catch (error) {
        console.error("Error updating alt text:", error);
        throw new Error("Failed to update alt text");
    }
}
