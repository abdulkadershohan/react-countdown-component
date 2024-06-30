import { Stack } from '@mui/material'
//import useCountdown from './hook/useCountdown'
import useCountdown from 'react-countdown'
function App() {
  const date = new Date().getTime() + 1000 * 60 * 60 * 24 * 2
  const { remainingTime, days, hours, seconds } = useCountdown(date)
  console.log(days, hours, seconds)
  return (
    <Stack spacing={4}>
      {remainingTime}
    </Stack>
  )
}

export default App
