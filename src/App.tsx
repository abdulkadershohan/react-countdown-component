import { Stack } from '@mui/material'
import Countdown from './components/Countdown'

function App() {
  const expiresAt = new Date().getTime() + 1000 * 60 * 60
  return (
    <Stack>
      <Countdown expiresAt={expiresAt} />
    </Stack>
  )
}

export default App
