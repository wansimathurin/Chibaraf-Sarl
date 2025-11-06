'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ loading: false, error: '', success: '' })

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: '', success: '' })

    // Basic client validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, error: 'Please provide name, email and message.', success: '' })
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Submission failed')
      }

      setForm({ name: '', email: '', subject: '', message: '' })
      setStatus({ loading: false, error: '', success: 'Thanks — we will get back to you shortly.' })
    } catch (err) {
      setStatus({ loading: false, error: err.message || 'Submission failed', success: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {status.error && <div className="text-sm text-red-600">{status.error}</div>}
      {status.success && <div className="text-sm text-green-700">{status.success}</div>}

      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm text-gray-600 mb-2">Name*</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-200 outline-none"
            placeholder="Your full name"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-gray-600 mb-2">Email*</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-200 outline-none"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="flex flex-col">
        <span className="text-sm text-gray-600 mb-2">Subject</span>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-200 outline-none"
          placeholder="Brief subject (optional)"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-sm text-gray-600 mb-2">Message*</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="6"
          className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-200 outline-none"
          placeholder="Tell us about your project, needs or questions"
        />
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status.loading}
          className="inline-flex items-center justify-center bg-green-700 text-white px-5 py-3 rounded-full hover:bg-green-800 transition disabled:opacity-60"
        >
          {status.loading ? 'Sending…' : 'Send message'}
        </button>

        <button
          type="button"
          onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setStatus({ loading: false, error: '', success: '' }) }}
          className="text-sm text-gray-600 underline"
        >
          Reset
        </button>
      </div>
    </form>
  )
}