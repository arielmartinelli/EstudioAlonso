"use server";

import { contactSchema } from "@/lib/contact-schema";

export type ContactResult = { ok: true } | { ok: false; error: string };

/**
 * Recibe la consulta. Se valida de nuevo en el servidor: nunca confiar en la validación del cliente.
 * DEMO: no envía nada. Para producción, conectar un proveedor de correo (Resend, SES…) con la API
 * key en una variable de entorno y agregar rate limiting por IP.
 */
export async function sendContact(input: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Revisá los campos marcados e intentá de nuevo." };
  }
  if (parsed.data.website) {
    // Bot detectado por honeypot: respondemos ok sin procesar.
    return { ok: true };
  }
  await new Promise((r) => setTimeout(r, 700));
  return { ok: true };
}
