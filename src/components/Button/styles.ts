import { Text, TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'CONTAINED' | 'OUTLINED'

type Props = {
  type: ButtonTypeStyleProps
}

type ButtonProps = Props & {
  isActive: boolean
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme, type }) => type === 'CONTAINED' ? 'transparent' : theme.COLORS.GRAY_1};
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-height: 50px;
  min-height: 50px;

  ${({isActive, theme, type}) => {
    switch(isActive){
      case true:
        return css`
          background-color: ${type === 'CONTAINED' ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_5};
        `;

      case false:
        return css`
          background-color: ${type === 'CONTAINED' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
        `
    }
  }}
`

export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'CONTAINED' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

