import styled, { css } from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
  isGoodPercentage: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const MealsInTheDietContainer = styled.View<Props>`
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({ theme, isGoodPercentage }) => isGoodPercentage ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const StatisticsContainer = styled.View<Props>`
  background-color: ${({ theme, isGoodPercentage }) => isGoodPercentage ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex: 1;
`

export const RoundedContainer = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px 20px 20px;
  width: 100%;
`

export const StatisticsTitle = styled.Text`
  margin-bottom: 24px;
  
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const RowContainer = styled.View`
  flex-direction: row;
  width: 100%;
`