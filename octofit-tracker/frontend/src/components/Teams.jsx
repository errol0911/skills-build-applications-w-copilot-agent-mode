import { getApiUrl } from '../api.js'
import CollectionView from './CollectionView.jsx'

const endpoint = getApiUrl('/api/teams/')
const codespacesEndpoint = 'https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/'

export default function Teams() {
  void codespacesEndpoint

  return (
    <CollectionView
      title="Teams"
      endpoint={endpoint}
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'description', label: 'Description' },
        { key: 'memberIds', label: 'Members', render: (record) => record.memberIds?.length ?? 0 },
      ]}
    />
  )
}