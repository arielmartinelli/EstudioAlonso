"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/motion/reveal";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { sendContact } from "@/app/actions";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 rounded-sm border-tinta/20 bg-papel px-4 text-base transition-colors focus-visible:border-cera focus-visible:ring-cera/30 aria-invalid:border-destructive";

export function Contact() {
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "", website: "" },
  });

  const onSubmit = (data: ContactInput) =>
    startTransition(async () => {
      const res = await sendContact(data);
      if (res.ok) {
        toast.success("Consulta enviada", {
          description: "Te llamamos dentro de las próximas 2 horas hábiles.",
        });
        reset();
      } else {
        toast.error(res.error);
      }
    });

  const info = [
    { icon: Phone, label: "Teléfono y urgencias", value: site.phoneDisplay, href: site.phoneHref },
    { icon: Mail, label: "Correo", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Oficina", value: `${site.address}, ${site.city}` },
    { icon: Clock, label: "Horario", value: site.hours },
  ];

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-papel">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:gap-14 md:px-8 md:py-24 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cera-oscura">Contacto</p>
          <h2 id="contacto-title" className="mt-3 font-display text-[clamp(2.1rem,6.2vw,3.75rem)] leading-[1.05] tracking-[-0.01em]">
            Contanos tu caso.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            La consulta es confidencial desde el primer mensaje. Si es una urgencia, no escribas:
            llamá.
          </p>

          <dl className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-1">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex min-w-0 gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-tinta/15">
                  <Icon className="size-4 text-cera-oscura" aria-hidden="true" />
                </span>
                <div>
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-plumaje">{label}</dt>
                  <dd className="mt-1 text-[1.02rem] break-words">
                    {href ? (
                      <a href={href} className="inline-block py-1.5 underline decoration-cera decoration-2 underline-offset-4 transition-colors hover:text-cera-oscura">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-sm border border-border bg-card p-5 shadow-[0_30px_60px_-40px_rgb(18_26_32/0.4)] md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Nombre y apellido" error={errors.name?.message}>
                <Input id="name" autoComplete="name" className={fieldClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
              </Field>
              <Field id="phone" label="Teléfono" error={errors.phone?.message}>
                <Input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="11 5555-0000" className={fieldClass} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} {...register("phone")} />
              </Field>
              <Field id="email" label="Correo (opcional)" error={errors.email?.message} className="sm:col-span-2">
                <Input id="email" type="email" autoComplete="email" className={fieldClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
              </Field>
              <Field id="message" label="¿Qué pasó?" error={errors.message?.message} className="sm:col-span-2">
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Contanos brevemente la situación. No incluyas datos que no quieras compartir todavía."
                  className={cn(fieldClass, "h-auto min-h-36 py-3")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message")}
                />
              </Field>

              {/* Honeypot: oculto para personas, visible para bots */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website">Sitio web</label>
                <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              <div className="sm:col-span-2">
                <label className="-mx-2 flex cursor-pointer items-start gap-3 rounded-sm p-2 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    className="mt-0.5 size-5 shrink-0 accent-[var(--tinta)]"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                    {...register("consent")}
                  />
                  Acepto que el estudio use estos datos solo para responder mi consulta (Ley 25.326 de
                  Protección de Datos Personales).
                </label>
                {errors.consent && (
                  <p id="consent-error" role="alert" className="mt-2 text-sm text-destructive">
                    {errors.consent.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-tinta px-8 py-4 font-semibold text-papel transition-[background-color,transform] duration-300 hover:bg-pizarra active:scale-[0.99] disabled:opacity-70 sm:w-auto"
            >
              {pending ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Enviando…
                </>
              ) : (
                <>
                  Enviar consulta
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
