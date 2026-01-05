import React from 'react'

export const metadata = {
  title: 'Ochrana osobních údajů - Moje AirAppka',
  description: 'Zásady ochrany osobních údajů Moje AirAppka Digital s.r.o. – informace o zpracování dat, právech uživatelů a kontaktech v ČR.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-md p-6">
      <h1 className="text-2xl font-bold">Ochrana osobních údajů</h1>
      <p className="mt-4 text-slate-300">Tento dokument popisuje, jak Moje AirAppka Digital s.r.o. shromažďuje, používá a chrání vaše osobní údaje. Kontakt: partner@moje-airappka.com.</p>
    </div>
  )
}
