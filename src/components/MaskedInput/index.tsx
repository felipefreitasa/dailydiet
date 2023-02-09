import { useState } from 'react'

import { TextInputMaskProps } from 'react-native-masked-text'

import { Container, ErrorMessage, InputContainer, Label } from './styles'

type Props = TextInputMaskProps & {
  label: string;
  hasError: boolean;
  errorMessage: string;
}

export function MaskedInput({ label, hasError, errorMessage,...rest }: Props){
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

      {hasError && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  )
}