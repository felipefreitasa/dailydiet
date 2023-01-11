import { TextInput } from 'react-native'

import styled, { css } from 'styled-components/native'

type Props = {
  isActive: boolean;
  isDescription: boolean;
}

export const Container = styled.View`
  width: 100%;
`

export const InputContainer = styled(TextInput)<Props>`
  min-height: 48px;
  max-height: 48px;
  padding: 14px;
  border-width: 1px;
  border-radius: 6px;

  ${({ theme, isActive, isDescription }) => css`
    color: ${theme.COLORS.GRAY_1};
    border-color: ${isActive ? theme.COLORS.GRAY_3 : theme.COLORS.GRAY_5};
    min-height: ${isDescription ? '120px' : '0px'};
  `}
`

export const Label = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
