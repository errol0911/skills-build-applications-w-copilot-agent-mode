import { getApiUrl } from '../api.js'
import CollectionView from './CollectionView.jsx'

const endpoint = getApiUrl('/api/activities/')
const codespacesEndpoint = 'https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/'

export default function Activities() {
  void codespacesEndpoint

  return (
    <CollectionView
      title="Activities"
      endpoint={endpoint}
      columns={[
        { key: 'type', label: 'Activity' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
        { key: 'activityDate', label: 'Date', render: (record) => new Date(record.activityDate).toLocaleDateString() },
      ]}
    />
  )
}