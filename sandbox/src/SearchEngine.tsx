import React, { useState } from 'react'

type AirData = {
  aqi: number
  pm25: number
  no2: number
}

function mockLookup(address: string): Promise<AirData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const seed = address.length % 100
      resolve({ aqi: 20 + (seed % 150), pm25: Math.round(seed / 3), no2: Math.round(seed / 4) })
    }, 500)
  })
}

export default function SearchEngine() {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AirData | null>(null)

  async function handleLookup(e?: React.FormEvent) {
    e?.preventDefault()
    if (!address) return
    setLoading(true)
    setResult(null)
    try {
      const data = await mockLookup(address)
      setResult(data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="search-card">
      <form onSubmit={handleLookup} className="search-form">
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Zadejte adresu nebo město"
          className="search-input"
        />
        <button type="submit" disabled={loading} className="search-button">
          {loading ? 'Hledám…' : 'Zkontrolovat'}
        </button>
      </form>

      {result && (
        <div className="result">
          <div className="aqi">AQI: <strong>{result.aqi}</strong></div>
          <div>PM2.5: {result.pm25} µg/m³</div>
          <div>NO₂: {result.no2} µg/m³</div>
        </div>
      )}
    </div>
  )
}
