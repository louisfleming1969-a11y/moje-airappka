import React from 'react'
import ContactInfo from './ContactInfo'

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900 mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Moje AirAppka Digital s.r.o.</h4>
          <p className="text-sm text-slate-400">Nezávislý poskytovatel environmentálních dat.</p>
        </div>

        <div className="col-span-1 md:col-span-1">
          <ContactInfo />
        </div>

        <div className="text-sm text-slate-400">
          <p>Ve Vaňkovce 462/1, 602 00 Brno-střed</p>
          <p className="mt-2">E-mail partner: <a className="text-emerald-400" href="mailto:partner@moje-airappka.com">partner@moje-airappka.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
