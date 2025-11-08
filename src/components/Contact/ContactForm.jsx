"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    if (!form.name || !form.email || !form.message) {
      setStatus({
        loading: false,
        error: t("validation.required"),
        success: "",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || t("validation.error"));
      }

      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus({
        loading: false,
        error: "",
        success: t("validation.success"),
      });
    } catch (err) {
      setStatus({
        loading: false,
        error: err.message || t("validation.error"),
        success: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {status.error && (
        <div className="text-sm text-red-600">{status.error}</div>
      )}
      {status.success && (
        <div className="text-sm text-green-700">{status.success}</div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm text-gray-600 mb-2">{t("name.label")}</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-200 outline-none"
            placeholder={t("name.placeholder")}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-gray-600 mb-2">{t("email.label")}</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-200 outline-none"
            placeholder={t("email.placeholder")}
          />
        </label>
      </div>

      <label className="flex flex-col">
        <span className="text-sm text-gray-600 mb-2">{t("subject.label")}</span>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-200 outline-none"
          placeholder={t("subject.placeholder")}
        />
      </label>

      <label className="flex flex-col">
        <span className="text-sm text-gray-600 mb-2">{t("message.label")}</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="6"
          className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-200 outline-none"
          placeholder={t("message.placeholder")}
        />
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status.loading}
          className="inline-flex items-center justify-center bg-green-700 text-white px-5 py-3 rounded-full hover:bg-green-800 transition disabled:opacity-60"
        >
          {status.loading ? t("buttons.sending") : t("buttons.submit")}
        </button>

        <button
          type="button"
          onClick={() => {
            setForm({ name: "", email: "", subject: "", message: "" });
            setStatus({ loading: false, error: "", success: "" });
          }}
          className="text-sm text-gray-600 underline"
        >
          {t("buttons.reset")}
        </button>
      </div>
    </form>
  );
}
