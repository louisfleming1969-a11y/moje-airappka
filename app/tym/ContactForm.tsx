"use client"
import React, { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="kontakt" className="mt-6">
      <h2 className="font-semibold">Kontaktujte nás</h2>
      {!sent ? (
        <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            placeholder="Jméno"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 bg-slate-800 border border-slate-700 rounded-md"
          />
          <input
            required
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 bg-slate-800 border border-slate-700 rounded-md"
          />
          <input
            required
            placeholder="Telefon"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="p-3 bg-slate-800 border border-slate-700 rounded-md md:col-span-2"
          />
          <button className="md:col-span-2 px-4 py-3 bg-emerald-500 text-slate-900 rounded-md font-semibold">Odeslat</button>
        </form>
      ) : (
        <div className="mt-4 p-4 bg-slate-800 rounded-md text-slate-300">Děkujeme, zpráva byla odeslána. Odezvu očekávejte na e-mail.</div>
      )}
    </section>
  )
}
