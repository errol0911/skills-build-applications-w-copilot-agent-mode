import { getApiUrl } from '../api.js'
import CollectionView from './CollectionView.jsx'

const endpoint = getApiUrl('/api/leaderboard/')
const codespacesEndpoint = 'https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/'

export default function Leaderboard() {
  void codespacesEndpoint

  return (
    <CollectionView
      title="Leaderboard"
      endpoint={endpoint}
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'userId', label: 'User' },
        { key: 'points', label: 'Points' },
      ]}
    />
  )
}