import styled, { css } from "styled-components/native"

export type ChipStatusProps ={
  isInTheDiet: boolean;
}

export const Container = styled.View`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 150px;
`

export const Circle = styled.View<ChipStatusProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, isInTheDiet }) => isInTheDiet  ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 8px;
  margin-right: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`