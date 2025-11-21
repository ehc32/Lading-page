import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ej: "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true si usas 465
      auth: {
        user: process.env.SMTP_USER, // tu correo SMTP
        pass: process.env.SMTP_PASS, // tu contraseña / app password
      },
    })

    await transporter.sendMail({
      from: `"Corporación Admipsalud Consultores" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "tucorreo@tu-dominio.com", // 👈 cambia esto por el correo donde quieres recibir los mensajes
      replyTo: email, // si respondes, se responde al usuario
      subject: "Nuevo mensaje desde el formulario de contacto",

      // Versión de texto plano (fallback)
      text: `
Nuevo mensaje desde el sitio web de la Corporación Admipsalud Consultores:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || "-"}

Mensaje:
${message}
      `.trim(),

      // Versión HTML más “nivel empresa”
      html: `
  <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #111827;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 0 auto; border-collapse: collapse;">
      <tr>
        <td style="padding: 24px 24px 16px 24px; text-align: left; border-bottom: 1px solid #e5e7eb;">
          <img src="cid:admipsalud-logo" alt="Corporación Admipsalud Consultores" style="height: 48px; display: block; margin-bottom: 8px;" />
          <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280;">
            Nuevo mensaje de contacto
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding: 24px;">
          <h1 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600; color: #111827;">
            Detalles del contacto
          </h1>
          <p style="margin: 0 0 16px 0; font-size: 14px; color: #4b5563;">
            Ha recibido un nuevo mensaje desde el formulario de contacto del sitio web de la
            <strong>Corporación Admipsalud Consultores</strong>.
          </p>

          <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 16px;">
            <tr>
              <td style="padding: 4px 0; width: 120px; color: #6b7280;">Nombre:</td>
              <td style="padding: 4px 0; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; color: #6b7280;">Correo:</td>
              <td style="padding: 4px 0;">
                <a href="mailto:${email}" style="color: #156d95; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 4px 0; color: #6b7280;">Teléfono:</td>
              <td style="padding: 4px 0; color: #111827;">${phone || "-"}</td>
            </tr>
          </table>

          <div style="margin-top: 16px;">
            <div style="font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 4px;">
              Mensaje:
            </div>
            <div style="font-size: 14px; color: #111827; white-space: pre-line; border-radius: 0.75rem; border: 1px solid #e5e7eb; padding: 12px 14px; background: #f9fafb;">
              ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding: 16px 24px 24px 24px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
          Corporación Admipsalud Consultores<br/>
          Centro Comercial Metropolitano · Cra 5 No. 6-28 · Torre B Oficina 703
        </td>
      </tr>
    </table>
  </div>
      `.trim(),

      // Logo incrustado
      attachments: [
        {
          filename: "logo.jpeg",
          path: `${process.cwd()}/public/img/logo.jpeg`, // 👈 ruta física en el servidor
          cid: "admipsalud-logo", // debe coincidir con el cid del <img>
        },
      ],
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error enviando correo", error)
    return NextResponse.json(
      { ok: false, error: "Error enviando correo" },
      { status: 500 }
    )
  }
}
