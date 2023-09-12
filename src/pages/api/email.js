import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {    
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_HOST,
          pass: process.env.EMAIL_APP_PASS,
        },
      });

      const mailOptions = {
        from: "noreply",
        to: req.body.email,
        subject: "Registration Confirmation",
        text: `Your payment with order-Id ${req.body.orderId} has been successful!`,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent:", info.response);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Email could not be sent" });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
