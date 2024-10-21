import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    try {
        const { name, email, phone, model, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const templatePath = path.join(process.cwd(), 'templates/contact.html');
        let emailTemplate = fs.readFileSync(templatePath, 'utf-8');

        emailTemplate = emailTemplate
            .replace(/{{name}}/g, name)
            .replace(/{{email}}/g, email)
            .replace(/{{phone}}/g, phone)
            .replace(/{{model}}/g, model)
            .replace(/{{message}}/g, message);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: (process.env.ENVIRONMENT == "dev") ? email : process.env.RECIPIENT_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            html: emailTemplate,
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
    }
}
