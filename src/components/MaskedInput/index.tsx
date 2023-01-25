import { useState } from 'react'

import { TextInputMaskProps } from 'react-native-masked-text';

import { Container, InputContainer, Label } from './styles'

type Props = TextInputMaskProps & {
  label: string;
}

export function MaskedInput({ label, ...rest }: Props){
  const [isActive, setIsActive] = useState(false)

  return (
    <Container>
      <Label>
        {label}
      </Label>

      <InputContainer
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        isActive={isActive}
        {...rest}
      />
    </Container>
  )
}