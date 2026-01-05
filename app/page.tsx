import React from 'react'
import SearchEngine from './components/SearchEngine'

export const metadata = {
  title: 'Změřte si čistotu vzduchu na vaší adrese - Moje AirAppka',
  description: 'Okamžitá analýza Air indexu pro jakoukoli ulici v ČR. My Air dashboard pro vaši rodinu.',
}

export default function Home() {
  return (
    <div>
      <section className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold">Zkontrolujte čistotu vzduchu na své adrese</h1>
        <p className="mt-2 text-slate-400">Osobní Air index pro váš domov i kancelář</p>
      </section>

      <SearchEngine />
    </div>
  )
}
