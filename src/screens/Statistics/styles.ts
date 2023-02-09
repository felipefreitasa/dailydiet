import styled, { css } from 'styled-components/native'

type Props = {
  isGoodPercentage: boolean;
}

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