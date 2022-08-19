import { PositiveIntegerInput } from './positive-integer-input'
import { useState } from 'react'
import { IntegerInput } from './integer-input'

export function App() {
  return (
    <div>
      <PositiveIntegerContainer />
      <IntegerContainer />
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

const IntegerContainer = () => {
  const [value, setValue] = useState<number | undefined>()

  return (
    <div>
      IntegerInput
      <br />
      <IntegerInput
        value={value}
        onChange={(ev) => {
          console.log(Number(ev.target.value))
          setValue(Number(ev.target.value))
        }}
      />
    </div>
  )
}
