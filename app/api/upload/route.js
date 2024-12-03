import cloudinary from 'cloudinary';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import fs from 'fs';
import Image from '@/models/Images';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
    try {
        const session = await getServerSession();
        console.log(session);

        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const formData = await req.formData();
        const file = formData.get('image');

        if (!file) {
            return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
        }

        const tempUrl = await fileToUrl(file);

        const uploadResponse = await cloudinary.v2.uploader.upload(
            tempUrl,
            {
                resource_type: 'auto',
            }
        );
        console.log(uploadResponse);

        const image = new Image({
            url: uploadResponse.secure_url,
            alt: formData.get('alt'),
            publicId: uploadResponse.public_id,
        });
        await image.save();
        console.log(image)

        return NextResponse.json({
            message: 'File uploaded successfully',
            url: uploadResponse.secure_url,
            _id: image._id,
            publicId: image.publicId,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}

async function fileToUrl(file) {
    const tempPath = `/tmp/${file.name}`;
    const writeStream = fs.createWriteStream(tempPath);
    const buffer = Buffer.from(await file.arrayBuffer());
    writeStream.write(buffer);
    writeStream.end();
    return tempPath;
}