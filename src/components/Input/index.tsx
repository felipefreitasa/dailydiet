import { useState } from 'react'
import { TextInputProps } from 'react-native'

import { Container, InputContainer, Label } from './styles'

type Props = TextInputProps & {
  label: string;
  isDescription?: boolean
}

export function Input({ label, isDescription = false, ...rest }: Props){
  const [isActive, setIsActive] = useState(false)

  return (
    <Container>
      <Label>
        {label}
      </Label>

      <InputContainer
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        multiline={isDescription}
        isActive={isActive}
        isDescription={isDescription}
        style={isDescription && {  textAlignVertical: 'top' }}
        {...rest}
      />
    </Container>
  )
}