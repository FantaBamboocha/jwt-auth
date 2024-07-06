import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationLink(to, link) {
    console.log(link);
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: "Account activation on JWT-AUTH",
        text: "",
        html: `
        <div>
          <h1>To activate please follow the link</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MailService();
