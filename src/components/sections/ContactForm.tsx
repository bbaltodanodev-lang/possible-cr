"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/provider";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/utils";
import { IconCheckCircle } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "sistema",
  message: "",
  website: "",
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const inputClasses =
  "w-full rounded-xl border border-line bg-card-strong px-4 py-3 text-[15px] text-strong placeholder:text-faint transition-colors focus:border-brand-400 focus:outline-none";

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-rose-400" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const endpoint =
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
    "/api/contact";

  const validateForm = (formData: FormState): FieldErrors => {
    const errs: FieldErrors = {};
    if (!formData.name.trim()) errs.name = t.contact.form.errorName;
    if (!formData.email.trim()) {
      errs.email = t.contact.form.errorEmailEmpty;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.contact.form.errorEmailInvalid;
    }
    if (!formData.message.trim()) errs.message = t.contact.form.errorMessage;
    return errs;
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});

    if (form.website) {
      setStatus("success");
      return;
    }

    const validationErrors = validateForm(form);
    if (Object.values(validationErrors).some(Boolean)) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    const payload = {
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
      website: form.website,
    };

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            _subject: `Nueva solicitud de ${form.name}`,
            _template: "table",
            _captcha: "false",
          }),
        });
        if (!response.ok) throw new Error("Solicitud rechazada");
        setStatus("success");
        return;
      }

      if (siteConfig.whatsappNumber) {
        const serviceLabel =
          t.contact.form.serviceOptions.find((s) => s.value === form.service)?.label ?? "";
        const message = `Hola, soy ${form.name}.${
          form.company ? ` Empresa: ${form.company}.` : ""
        } Estoy interesado en: ${serviceLabel}.\n\n${form.message}`;
        window.location.href = buildWhatsAppLink(siteConfig.whatsappNumber, message);
        setForm(initialState);
        setStatus("success");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-card border border-emerald-500/30 bg-emerald-500/15 p-8">
        <span className="grid size-12 place-items-center rounded-full bg-emerald-500/20 text-emerald-300">
          <IconCheckCircle className="size-6" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-strong">{t.contact.form.successTitle}</h3>
          <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-body">
            {t.contact.form.successText}
            {!endpoint && !siteConfig.whatsappNumber ? (
              <>
                {" "}{t.contact.form.successMailFallback}{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-300 underline">
                  {siteConfig.email}
                </a>
                .
              </>
            ) : null}
            {!endpoint && siteConfig.whatsappNumber ? (
              <> {t.contact.form.successWhatsappFallback}</>
            ) : null}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm(initialState);
          }}
          className="text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
        >
          {t.contact.form.again}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-nombre" className="mb-1.5 block text-sm font-medium text-body">
            {t.contact.form.name} <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "error-nombre" : undefined}
            className={cn(inputClasses, errors.name && "border-rose-500/60")}
            placeholder={t.contact.form.namePlaceholder}
          />
          {errors.name ? <FieldError id="error-nombre" message={errors.name} /> : null}
        </div>

        <div>
          <label htmlFor="contact-empresa" className="mb-1.5 block text-sm font-medium text-body">
            {t.contact.form.company}
          </label>
          <input
            id="contact-empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
            className={inputClasses}
            placeholder={t.contact.form.optional}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-body">
            {t.contact.form.email} <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            className={cn(inputClasses, errors.email && "border-rose-500/60")}
            placeholder={t.contact.form.emailPlaceholder}
          />
          {errors.email ? <FieldError id="error-email" message={errors.email} /> : null}
        </div>

        <div>
          <label htmlFor="contact-telefono" className="mb-1.5 block text-sm font-medium text-body">
            {t.contact.form.phone}
          </label>
          <input
            id="contact-telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClasses}
            placeholder={t.contact.form.optional}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-servicio" className="mb-1.5 block text-sm font-medium text-body">
          {t.contact.form.service}
        </label>
        <select
          id="contact-servicio"
          name="servicio"
          value={form.service}
          onChange={(event) => update("service", event.target.value)}
          className={inputClasses}
        >
          {t.contact.form.serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-mensaje" className="mb-1.5 block text-sm font-medium text-body">
          {t.contact.form.message} <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="contact-mensaje"
          name="mensaje"
          rows={4}
          required
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "error-mensaje" : undefined}
          className={cn(inputClasses, "resize-none", errors.message && "border-rose-500/60")}
          placeholder={t.contact.form.messagePlaceholder}
        />
        {errors.message ? <FieldError id="error-mensaje" message={errors.message} /> : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">{t.contact.form.honeypot}</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      {status === "error" ? (
        <p className="rounded-xl bg-rose-500/15 px-4 py-3 text-sm font-medium text-rose-300" role="alert">
          {t.contact.form.errorGeneral}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient text-[15px] font-semibold text-white transition",
          status === "submitting" ? "cursor-wait opacity-80" : "hover:brightness-110",
        )}
      >
        {status === "submitting" ? t.contact.form.submitting : t.contact.form.submit}
      </button>
    </form>
  );
}
