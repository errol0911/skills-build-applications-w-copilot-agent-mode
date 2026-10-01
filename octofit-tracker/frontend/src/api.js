const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export function getApiUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000'

  return `${baseUrl}${normalizedPath}`
}

export function normalizeRecords(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  const candidates = [
    payload?.records,
    payload?.results,
    payload?.items,
    payload?.docs,
    payload?.data,
    payload?.data?.records,
    payload?.data?.results,
    payload?.data?.items,
    payload?.data?.docs,
  ]

  return candidates.find(Array.isArray) ?? []
}