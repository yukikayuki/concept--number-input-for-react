import { FC, KeyboardEvent, InputHTMLAttributes, useCallback, ChangeEvent } from 'react'

type InputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'type' | 'max' | 'min'>
type ExpandedAttributes = {
  value?: number | undefined
  max?: number | undefined
  min?: number | undefined
}

type IntegerInputProps = InputAttributes & ExpandedAttributes

export const PositiveIntegerInput: FC<IntegerInputProps> = (props) => {
  const { value, onChange, min, max, ...others } = props

  if (min != null && min < 0) {
    throw new Error(`props.min must be greater than 0 or equal`)
  }

  const handleOnKeyDown = useCallback((ev: KeyboardEvent<HTMLInputElement>) => {
    if (['e', '.', '+', '-'].includes(ev.key)) {
      ev.preventDefault()
    }
  }, [])

  const handleOnChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let value = Number(ev.target.value)

      if (value > Number.MAX_SAFE_INTEGER) {
        value = Number.MAX_SAFE_INTEGER
      }
      if (max != null && value > max) {
        value = max
      }
      if (min != null && value < min) {
        value = min
      }
      if (value < 0) {
        value = 0
      }

      ev.target.value = String(value)
      onChange && onChange(ev)
    },
    [onChange],
  )

  return (
    <input
      {...others}
      type={'number'}
      min={min != null ? min : 0}
      max={max}
      value={value?.toString() ?? ''}
      onKeyDown={handleOnKeyDown}
      onChange={handleOnChange}
    />
  )
}
