import './globals.css'
import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Moje AirAppka - Zkontrolujte čistotu vzduchu',
  description: 'Okamžitá analýza Air indexu pro jakoukoli ulici v ČR. My Air dashboard pro vaši rodinu.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="flex h-screen">
          <aside className="hidden md:block w-72 sticky top-0 h-screen border-r border-slate-800 bg-slate-900">
            <Sidebar />
          </aside>

          <div className="flex-1 flex flex-col">
            <Header />
            <main className="p-6 overflow-auto">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
