import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: process.env.USER, pass: process.env.PASSWORD },
});

const email = {
  from: 'erling haaland',
  to: 'ibironkemarv@gmail.com',
  subject: '👀 Hola ',
  text: 'newIncident',
  html: '<h1>test abeg</h1>',
};
async function send() {
  await transporter.sendMail(email).catch((error) => {
    console.log(error);
  });
}

export default send();
