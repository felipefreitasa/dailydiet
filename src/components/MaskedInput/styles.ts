import styled, { css } from 'styled-components/native'

import { TextInputMask } from 'react-native-masked-text'


type Props = {
  isActive: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`

export const InputContainer = styled(TextInputMask)<Props>`
  min-height: 48px;
  max-height: 48px;
  padding: 14px;
  border-width: 1px;
  border-radius: 6px;

  ${({ theme, isActive }) => css`
    color: ${theme.COLORS.GRAY_1};
    border-color: ${isActive ? theme.COLORS.GRAY_3 : theme.COLORS.GRAY_5};
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
