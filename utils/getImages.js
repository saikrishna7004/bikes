'use server'
import Image from "@/models/Images";
import connectMongo from "./connectMongo";

export const getImages = async () => {
    await connectMongo();
    
    try {
        const images = await Image.find();
        return images;
    } catch (error) {
        console.error(error);
    }
};