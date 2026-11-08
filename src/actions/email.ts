import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro/zod';
import { Resend } from 'resend';

export const email = {
  send: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(1, { message: "Name is required" }),
      email: z.string().email({ message: "Please enter a valid email address" }),
      message: z.string().min(1, { message: "Message is required" }),
      lang: z.string(),
      services: z.string().optional(),
    }),
    handler: async ({ name, email, message, lang, services }, { locals }) => {
      // ❌ Removed 'redirect' from destructuring
      
      if (!import.meta.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not set.");
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Email server is not configured.',
        });
      }

      const resend = new Resend(import.meta.env.RESEND_API_KEY);
      
      const toEmail = 'support@nearmelab.digital';

      // Use the { data, error } pattern
      const { data, error } = await resend.emails.send({
        from: 'Nearmelab team <contact@nearmelab.digital>',
        to: [toEmail],
        subject: `New message from ${name} (${lang})`,
        html: `<p>You have a new submission from your website:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               ${services ? `<p><strong>Selected Services:</strong> ${services}</p>` : ''}
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
        reply_to: email,
      });

      if (error) {
        console.error('Resend error:', error);
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message || 'Failed to send email.',
        });
      }

      // ✅ Return JSON - NO REDIRECT
      return {
        success: true,
        message: 'Your message has been sent successfully!',
        lang
      };
    },
  }),
};