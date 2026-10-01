import { getApiUrl } from '../api.js'
import CollectionView from './CollectionView.jsx'

const endpoint = getApiUrl('/api/users/')
const codespacesEndpoint = 'https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/'

export default function Users() {
  void codespacesEndpoint

  return (
    <CollectionView
      title="Users"
      endpoint={endpoint}
      columns={[
        { key: 'displayName', label: 'Name' },
        { key: 'username', label: 'Username' },
        { key: 'email', label: 'Email' },
      ]}
    />
  )
}