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

        const templatePath = path.join(process.cwd(), 'templates/dealership.html');
        let emailTemplate = fs.readFileSync(templatePath, 'utf-8');

        emailTemplate = emailTemplate
            .replace(/{{fullName}}/g, fullName)
            .replace(/{{email}}/g, email)
            .replace(/{{contactNumber}}/g, contactNumber)
            .replace(/{{state}}/g, state)
            .replace(/{{district}}/g, district)
            .replace(/{{address}}/g, address);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ENVIRONMENT == "dev" ? email : process.env.RECIPIENT_EMAIL,
            subject: `New Contact Form Submission from ${fullName}`,
            html: emailTemplate,
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
    }
}
