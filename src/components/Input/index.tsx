import { useState } from 'react'

import { TextInputProps } from 'react-native'

import { Container, ErrorMessage, InputContainer, Label } from './styles'

type Props = TextInputProps & {
  label: string;
  isDescription?: boolean;
  hasError: boolean;
  errorMessage: string;
}

export function Input({ label, isDescription = false, hasError, errorMessage, ...rest }: Props){
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

      {hasError && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  )
}