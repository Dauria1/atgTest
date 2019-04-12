import { useState } from 'react'

type UseFormInputReturnType = {
  value: string
  onChange: (e: any) => void
}

export const useFormInput = (): UseFormInputReturnType => {
  const [value, setValue] = useState<string>('')
  return {
    value,
    onChange({ target: { value } }: any) {
      setValue(value)
    }
  }
}
