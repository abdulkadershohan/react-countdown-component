import { Stack } from '@mui/material'
import useCountdown from './hook/useCountdown'

function App() {
  const expiresAt = new Date().getTime() + 1000 * 60 * 60 * 24 * 7
  const { days } = useCountdown(expiresAt)
  return (
    <Stack spacing={4}>
      {days}
    </Stack>
  )
}

export default App
