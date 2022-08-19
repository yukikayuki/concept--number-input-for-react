import { PositiveIntegerInput } from './positive-integer-input'
import { useState } from 'react'

export function App() {
  return (
    <div>
      <PositiveIntegerContainer />
    </div>
  )
}

const PositiveIntegerContainer = () => {
  const [value, setValue] = useState<number | undefined>()

  return (
    <div>
      PositiveIntegerInput
      <br />
      <PositiveIntegerInput
        value={value}
        onChange={(ev) => {
          console.log(Number(ev.target.value))
          setValue(Number(ev.target.value))
        }}
      />
    </div>
  )
}
