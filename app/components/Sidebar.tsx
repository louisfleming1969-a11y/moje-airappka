import React from 'react'

const Sidebar = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="w-full text-center text-emerald-400 font-bold text-xl">Moje AirAppka</div>
      </div>

      <nav className="flex flex-col gap-3">
        <a href="/#search-map" className="px-3 py-2 rounded-md hover:bg-slate-800">Hledat</a>
        <a href="/o-aplikaci" className="px-3 py-2 rounded-md hover:bg-slate-800">Technologie</a>
        <a href="/air-program" className="px-3 py-2 rounded-md hover:bg-slate-800">Air Program</a>
        <a href="/tym" className="px-3 py-2 rounded-md hover:bg-slate-800">Tým</a>
        <a href="#kontakt" className="px-3 py-2 rounded-md hover:bg-slate-800">Kontakt</a>
      </nav>
    </div>
  )
}

export default Sidebar
