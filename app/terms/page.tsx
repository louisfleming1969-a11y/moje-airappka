import React from 'react'

export const metadata = {
  title: 'Obchodní podmínky - Moje AirAppka',
  description: 'Obchodní podmínky služby Moje AirAppka. Podmínky používání a odpovědnost.',
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-md p-6">
      <h1 className="text-2xl font-bold">Obchodní podmínky</h1>
      <p className="mt-4 text-slate-300">Tyto obchodní podmínky upravují používání služby Moje AirAppka.</p>
    </div>
  )
}
