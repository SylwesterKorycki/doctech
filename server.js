import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint odbierający dane z formularza
app.post("/send", async (req, res) => {
  const { name, email, phone, message, company, services, timeline } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Outlook", // lub "gmail"
      auth: {
        user: process.env.MAIL_USER, // zamiast wpisywać na sztywno
        pass: process.env.MAIL_PASS, // hasło aplikacyjne w ENV
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${email}>`,
      to: process.env.MAIL_USER, // bezpieczniej też z ENV
      subject: "New Project Inquiry",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Services: ${services}
        Timeline: ${timeline}

        Message:
        ${message}
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    res.json({ success: false, error: err.message });
  }
});

// 🔑 kluczowe zmiany dla Render:
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
