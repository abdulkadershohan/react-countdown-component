<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Parameters](#parameters)
- [Return Values](#return-values)
- [License](#license)
- [Author](#author)

# useCountdown React Hook
`useCountdown` is a custom React hook designed to create countdown timers based on a specified date.

<!--Installation -->

## Installation

You can install react-countdown-component-hooks using npm or yarn:

Install dev dependencies
   ```sh
    npm i react-countdown-component-hooks 
    # or
    yarn add react-countdown-component-hooks
   ```

## Usage

* Example -1
```sh
import { useCountdown } from 'react-countdown-component-hooks'

function App() {
  const expiresAt = new Date().getTime() + 1000 * 60 * 60 * 24 * 7
  const { remainingTime } = useCountdown(expiresAt)
  return (
    <div>
      {remainingTime}
    </div>
  )
}

export default App

```

* Example -2
```sh
import { useCountdown } from 'react-countdown-component-hooks'

function App() {
  const expiresAt = new Date().getTime() + 1000 * 60 * 60 * 24 * 7
  const { days, hours, minutes, remainingTime, seconds } = useCountdown(expiresAt)
  return (
    <div>
      <p>Time Remaining: {remainingTime}</p>
      <p>Days: {days}, Hours: {hours}, Minutes: {minutes}, Seconds: {seconds}</p>
    </div>
  )
}

export default App


```


## Parameters
* date (string | number | Date): The target date for the countdown timer.

## Return Values
* days (number): The number of days remaining.
* hours (number): The number of hours remaining.
* minutes (number): The number of minutes remaining.
* seconds (number): The number of seconds remaining.
* remainingTime (string): The remaining time in the format "DD:HH:MM:SS".

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
<img src="https://avatars.githubusercontent.com/u/56482597?v=4" width="200" style="border-radius:50%"/>


 - [MD. Abdul Kader](
    https://www.linkedin.com/in/abdulkadershohan/)
        
    ```
    Email: abdulkadirshohan@gmail.com
    ```
    ```
    Protfolio: https://dev-shohan.netlify.app/
    ```
    ```
    https://github.com/abdulkadershohan

    ```