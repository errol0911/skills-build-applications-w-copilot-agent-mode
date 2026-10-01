import { useEffect, useState } from 'react'
import { normalizeRecords } from '../api.js'

export default function CollectionView({ columns, endpoint, title }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadRecords() {
      try {
        setStatus('loading')
        const response = await fetch(endpoint, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const payload = await response.json()
        setRecords(normalizeRecords(payload))
        setStatus('ready')
      } catch (requestError) {
        if (requestError.name === 'AbortError') {
          return
        }

        setError(requestError.message)
        setStatus('error')
      }
    }

    loadRecords()

    return () => controller.abort()
  }, [endpoint])

  return (
    <section className="metric-panel">
      <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-3">
        <div>
          <p className="metric-label mb-1">OctoFit Data</p>
          <h1 className="h3 mb-0">{title}</h1>
        </div>
        <span className="endpoint-badge">{endpoint}</span>
      </div>

      {status === 'loading' && <p className="mb-0 text-secondary">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="mb-0 text-danger">{error}</p>}
      {status === 'ready' && records.length === 0 && <p className="mb-0 text-secondary">No records found.</p>}

      {status === 'ready' && records.length > 0 && (
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th scope="col" key={column.key}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record._id ?? record.id ?? JSON.stringify(record)}>
                  {columns.map((column) => (
                    <td key={column.key}>{column.render ? column.render(record) : record[column.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}