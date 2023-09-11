// server/api/send-email.post.ts
import { useCompiler } from '#vue-email'
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const template = await useCompiler('lesson-email.vue',
    // props for email template
    {
      childName: body.childName,
      parentName: body.parentName,
      residence: body.residence,
      childAge: body.childAge,
      childGender: body.childGender,
      parentEmail: body.parentEmail,
      parentPhone: body.parentPhone,
      languageLevel: body.languageLevel,
      expectations: body.expectations
    }
  )

  const options = {
    from: 'AvalonAlgo@protonmail.com',
    to: 'kalinka@kalinka.web.tr',
    subject: 'Калинка - Заявка на пробное занятие',
    html: template,
  };

  const status = await sendgrid.send(options);

  return status;
});
