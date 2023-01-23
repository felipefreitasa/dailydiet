import styled, { css } from 'styled-components/native'

import { TouchableOpacity } from 'react-native'

type Props = {
  isGoodPercentage: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 102px;
  background-color: ${({ theme, isGoodPercentage }) => isGoodPercentage ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`

export const IconContainer = styled.View`
  position: absolute;
  right: 8px;
  top: 9px;
`

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`

export const Paragraph = styled.Text`
   ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`