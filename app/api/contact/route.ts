// app/api/contact/route.ts
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

    // Opcional: validar que las env existen
    const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"]
    for (const key of requiredEnv) {
      if (!process.env[key]) {
        throw new Error(`Falta la variable de entorno ${key}`)
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ej: smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true si usas 465
      auth: {
        user: process.env.SMTP_USER, // tu correo SMTP
        pass: process.env.SMTP_PASS, // tu contraseña / app password
      },
    })

    await transporter.sendMail({
      from: `"Corporación Admipsalud Consultores" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "tucorreo@tu-dominio.com", // 🔴 CAMBIA esto al correo donde quieres recibir los mensajes
      replyTo: email, // si respondes, se responde al usuario
      subject: "Nuevo mensaje desde el formulario de contacto",

      // Texto plano (fallback)
      text: `
Nuevo mensaje desde el sitio web de la Corporación Admipsalud Consultores:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || "-"}

Mensaje:
${message}
      `.trim(),

      // HTML sencillo “nivel empresa”
      html: `
<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #111827;">
  <h2 style="margin: 0 0 12px 0;">Nuevo mensaje de contacto</h2>
  <p style="margin: 0 0 8px 0;">
    Ha recibido un nuevo mensaje desde el formulario de contacto del sitio web de la
    <strong>Corporación Admipsalud Consultores</strong>.
  </p>

  <p style="margin: 0 0 4px 0;"><strong>Nombre:</strong> ${name}</p>
  <p style="margin: 0 0 4px 0;"><strong>Email:</strong> ${email}</p>
  <p style="margin: 0 0 12px 0;"><strong>Teléfono:</strong> ${phone || "-"}</p>

  <div style="margin-top: 12px;">
    <div style="font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 4px;">Mensaje:</div>
    <div style="font-size: 14px; color: #111827; white-space: pre-line; border-radius: 0.75rem; border: 1px solid #e5e7eb; padding: 12px 14px; background: #f9fafb;">
      ${String(message)
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}
    </div>
  </div>

  <hr style="margin: 24px 0 8px 0; border: none; border-top: 1px solid #e5e7eb;" />
  <p style="font-size: 12px; color: #6b7280; margin: 0;">
    Corporación Admipsalud Consultores<br/>
    Centro Comercial Metropolitano · Cra 5 No. 6-28 · Torre B Oficina 703
  </p>
</div>
      `.trim(),
    })

    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error("Error enviando correo", error)
    return NextResponse.json(
      {
        ok: false,
        error: "Error enviando correo",
        details: error?.message || "Sin mensaje de error",
      },
      { status: 500 }
    )
  }
}
