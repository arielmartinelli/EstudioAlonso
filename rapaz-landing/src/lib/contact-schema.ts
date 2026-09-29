import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribí tu nombre.").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s()-]{8,20}$/, "Ingresá un teléfono válido, con código de área."),
  email: z.union([z.literal(""), z.email("Revisá el correo: falta algo.")]),
  message: z
    .string()
    .trim()
    .min(20, "Contanos un poco más (al menos 20 caracteres).")
    .max(2000, "Máximo 2000 caracteres."),
  consent: z.literal(true, { error: "Necesitamos tu autorización para responderte." }),
  // Honeypot anti-spam: debe quedar vacío
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
