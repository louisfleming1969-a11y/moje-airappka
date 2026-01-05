import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-emerald-500 flex items-center justify-center font-bold text-slate-900">MA</div>
          <div>
            <div className="text-sm font-semibold">Moje AirAppka</div>
            <div className="text-xs text-slate-400">Zkontrolujte čistotu vzduchu na své adrese</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="/#search-map" className="hover:text-emerald-300">Hledat</a>
          <a href="/#air-program" className="hover:text-emerald-300">Air Program</a>
          <a href="/o-aplikaci" className="hover:text-emerald-300">Technologie</a>
          <a href="/tym" className="hover:text-emerald-300">Tým</a>
          <a href="/tym#kontakt" className="hover:text-emerald-300">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
