// server/api/send-email.post.ts
import { useCompiler } from '#vue-email'
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey("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");

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const template = await useCompiler('contact-email.vue',
    // props for email template
    {
      name: body.name,
      email: body.email,
      message: body.message,
    }
  )

  const options = {
    from: 'AvalonAlgo@protonmail.com',
    to: 'denizkeskin@gmail.com',
    subject: 'Калинка - Новый вопрос',
    html: template,
  };

  const status = await sendgrid.send(options);

  return status;
});
