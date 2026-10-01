import { getApiUrl } from '../api.js'
import CollectionView from './CollectionView.jsx'

const endpoint = getApiUrl('/api/workouts/')
const codespacesEndpoint = 'https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/'

export default function Workouts() {
  void codespacesEndpoint

  return (
    <CollectionView
      title="Workouts"
      endpoint={endpoint}
      columns={[
        { key: 'name', label: 'Workout' },
        { key: 'level', label: 'Level' },
        { key: 'focusArea', label: 'Focus' },
        { key: 'durationMinutes', label: 'Minutes' },
      ]}
    />
  )
}