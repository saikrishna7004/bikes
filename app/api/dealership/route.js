import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    try {
        const { fullName, email, contactNumber, state, district, address } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const recipientTemplatePath = path.join(process.cwd(), 'templates/dealership_recipient.html');
        let recipientTemplate = fs.readFileSync(recipientTemplatePath, 'utf-8');

        recipientTemplate = recipientTemplate
            .replace(/{{fullName}}/g, fullName)
            .replace(/{{email}}/g, email)
            .replace(/{{contactNumber}}/g, contactNumber)
            .replace(/{{state}}/g, state)
            .replace(/{{district}}/g, district)
            .replace(/{{address}}/g, address);

        const userTemplatePath = path.join(process.cwd(), 'templates/dealership_user.html');
        let userTemplate = fs.readFileSync(userTemplatePath, 'utf-8');

        userTemplate = userTemplate
            .replace(/{{fullName}}/g, fullName)
            .replace(/{{email}}/g, email)
            .replace(/{{contactNumber}}/g, contactNumber)
            .replace(/{{state}}/g, state)
            .replace(/{{district}}/g, district)
            .replace(/{{address}}/g, address);

        const recipientMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Dealership Submission from ${fullName}`,
            html: recipientTemplate,
        };

        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Confirmation: Your Dealership Submission`,
            html: userTemplate,
        };

        await transporter.sendMail(recipientMailOptions);
        await transporter.sendMail(userMailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
    }
}
