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
        user: "korycki.sylwester@outlook.com", // <-- Twój mail
        pass: "TWOJE_HASŁO_APLIKACYJNE",       // <-- tu musi być hasło/aplikacyjne
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${email}>`,
      to: "korycki.sylwester@outlook.com", // gdzie ma przyjść wiadomość
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

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});