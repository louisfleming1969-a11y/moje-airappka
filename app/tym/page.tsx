import React from 'react'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Tým - Moje AirAppka',
  description: 'Seznam našeho týmu a kontaktní formulář. Petr Marek (CEO), Anna Černá (Head of Research).',
}

export default function TymPage() {
  return (
    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-md p-6">
      <h1 className="text-2xl font-bold">Tým</h1>

      <section className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-slate-800 rounded-md">
          <h3 className="font-semibold">Petr Marek</h3>
          <p className="text-slate-300 text-sm">CEO</p>
          <p className="mt-2 text-slate-300">Vedoucí produktu a obchodních partnerství.</p>
        </div>

        <div className="p-4 bg-slate-800 rounded-md">
          <h3 className="font-semibold">Anna Černá</h3>
          <p className="text-slate-300 text-sm">Head of Research</p>
          <p className="mt-2 text-slate-300">Odpovídá za síť senzorů, datové modely a validaci výsledků.</p>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
