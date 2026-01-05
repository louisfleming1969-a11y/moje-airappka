"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

type AirData = {
  aqi: number
  status: 'Dobré' | 'Upozornění' | 'Nevhodné'
  pm25: number
  no2: number
  forecast: Array<{ day: string; aqi: number }>
}

async function getAirQuality(address: string): Promise<AirData> {
  await new Promise((r) => setTimeout(r, 1200))
  const aqi = Math.max(5, Math.min(200, Math.round(50 + Math.random() * 120)))
  const status = aqi <= 50 ? 'Dobré' : aqi <= 100 ? 'Upozornění' : 'Nevhodné'
  return {
    aqi,
    status,
    pm25: parseFloat((Math.random() * 40).toFixed(1)),
    no2: parseFloat((Math.random() * 60).toFixed(1)),
    forecast: ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'].map((d, i) => ({ day: d, aqi: Math.max(10, aqi + (Math.round(Math.random() * 40) - 20)) })),
  }
}

export default function SearchEngine() {
  const [address, setAddress] = useState('')
  const [scanning, setScanning] = useState(false)
  const [data, setData] = useState<AirData | null>(null)

  const runSearch = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!address.trim()) return
    setData(null)
    setScanning(true)
    const res = await getAirQuality(address)
    setData(res)
    setScanning(false)
  }

  const gaugePercent = data ? Math.min(100, Math.round((data.aqi / 200) * 100)) : 0

  return (
    <section id="search-map" className="max-w-4xl mx-auto">
      <form onSubmit={runSearch} className="flex gap-3">
        <input
          aria-label="Zadejte adresu"
          className="flex-1 px-4 py-3 rounded-md bg-slate-800 border border-slate-700 focus:outline-none"
          placeholder="Zadejte ulici, město (např. Ve Vaňkovce 462/1, Brno)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-500 text-slate-900 rounded-md font-semibold hover:brightness-105"
        >
          Zkontrolovat
        </button>
      </form>

      <div className="mt-6">
        {scanning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 text-slate-300"
          >
            <div className="w-8 h-8 border-4 border-t-emerald-400 border-slate-700 rounded-full animate-spin" />
            <div>Prohledávám senzory a modely…</div>
          </motion.div>
        )}

        {data && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 bg-slate-900 border border-slate-800 rounded-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Air Index: {data.aqi}</h3>
                <p className="text-sm text-slate-400">Stav: <span className="text-emerald-300">{data.status}</span></p>
                <p className="mt-2 text-sm text-slate-400">Lokalita: {address}</p>
              </div>

              <div className="w-36 h-36 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-28 h-28">
                  <path
                    d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831 15.9155 15.9155 0 1 0 0-31.831"
                    fill="none"
                    stroke="#0f172a"
                    strokeWidth="4"
                  />
                  <circle
                    r="14"
                    cx="18"
                    cy="18"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="4"
                    strokeDasharray={`${gaugePercent} 100`}
                    transform="rotate(-90 18 18)"
                  />
                  <text x="18" y="20" textAnchor="middle" className="text-sm fill-white" style={{ fontSize: '6px' }}>
                    {data.aqi}
                  </text>
                </svg>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800 rounded-md">
                <h4 className="font-semibold">PM2.5</h4>
                <p className="text-2xl mt-2">{data.pm25} µg/m³</p>
              </div>

              <div className="p-4 bg-slate-800 rounded-md">
                <h4 className="font-semibold">NO2</h4>
                <p className="text-2xl mt-2">{data.no2} µg/m³</p>
              </div>

              <div className="p-4 bg-slate-800 rounded-md">
                <h4 className="font-semibold">Předpověď (7 dní)</h4>
                <ul className="mt-2 text-sm text-slate-300">
                  {data.forecast.map((f) => (
                    <li key={f.day} className="flex justify-between">
                      <span>{f.day}</span>
                      <span className="font-medium">{f.aqi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
