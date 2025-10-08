import nodemailer from "nodemailer"

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ ok: false })
    try {
        const { name = "", email = "", message = "" } = req.body || {}
        const n = String(name).trim()
        const e = String(email).trim()
        const m = String(message).trim()
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
        if (!n || !emailOk || !m) return res.status(400).json({ ok: false })

        const host = process.env.SMTP_HOST
        const port = Number(process.env.SMTP_PORT || 465)
        const user = process.env.SMTP_USER
        const pass = process.env.SMTP_PASS
        const toEmail = process.env.TO_EMAIL || user

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass }
        })

        const subject = `${n} wysłał wiadomość ze strony bezpiecznywypoczynek.pl`
        const text = `Imię: ${n}\nEmail: ${e}\n\nWiadomość:\n${m}`
        const html = `<div>
        Imię: <strong>${n}</strong><br>
        Email: <a href="mailto:${e}">${e}</a><br><br>
        <div>Wiadomość:</div>
        <div>${m.replace(/\n/g, "<br>")}</div>
      </div>`

        await transporter.sendMail({
            from: `"${n} przez Formularz" <${user}>`,
            to: toEmail,
            subject,
            text,
            html,
            replyTo: e
        })

        return res.status(200).json({ ok: true })
    } catch (err) {
        console.error("Mail error:", err)
        return res.status(500).json({ ok: false })
    }
}
