// server/api/send-email.post.ts
import { useCompiler } from '#vue-email'
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_KEY);

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
    to: 'kalinka@kalinka.web.tr',
    subject: 'Калинка - Новый вопрос',
    html: template,
  };

  const status = await sendgrid.send(options);

  return status;
});
