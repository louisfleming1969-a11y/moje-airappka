import React from 'react'

const ContactInfo = () => {
  return (
    <div className="contact-details p-4">
      <h3 className="text-lg font-semibold">Kontaktujte nás</h3>
      <p className="mt-2"><strong>Adresa:</strong> Ve Vaňkovce 462/1, 602 00 Brno-střed</p>
      <p className="mt-1"><strong>Telefon:</strong> <a className="text-emerald-400 hover:underline" href="tel:+420734850549">+420 734 850 549</a></p>
      <p className="mt-1"><strong>E-mail:</strong> <a className="text-emerald-400 hover:underline" href="mailto:info@moje-airappka.com">info@moje-airappka.com</a></p>
      <div className="mt-4">
        <p className="text-sm italic text-slate-400">Najdete nás v administrativní části Galerie Vaňkovka.</p>
      </div>
    </div>
  )
}

export default ContactInfo
