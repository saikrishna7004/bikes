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
        
        const recipientTemplatePath = path.join(process.cwd(), 'templates/contact_recipient.html');
        let recipientTemplate = fs.readFileSync(recipientTemplatePath, 'utf-8');

        recipientTemplate = recipientTemplate
            .replace(/{{name}}/g, name)
            .replace(/{{email}}/g, email)
            .replace(/{{phone}}/g, phone)
            .replace(/{{model}}/g, model || '-')
            .replace(/{{message}}/g, message);

        const userTemplatePath = path.join(process.cwd(), 'templates/contact_user.html');
        let userTemplate = fs.readFileSync(userTemplatePath, 'utf-8');

        userTemplate = userTemplate
            .replace(/{{name}}/g, name)
            .replace(/{{email}}/g, email)
            .replace(/{{phone}}/g, phone)
            .replace(/{{modelmessage}}/g, model ? `<p>We will get back to you shortly regarding your inquiry about <span class="highlight">${model}</span>.</p>` : '<p>We will get back to you shortly regarding your interest.</p>')
            .replace(/{{message}}/g, message);

        const recipientMailOptions = {
            from: `"Devashree PEV" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            html: recipientTemplate,
        };

        const userMailOptions = {
            from: `"Devashree PEV" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Confirmation: Your Contact Form Submission`,
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
