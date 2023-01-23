import styled, { css } from "styled-components/native"

type Props = {
  backgroundColor: string;
}

export const Container = styled.View<Props>`
  border-radius: 8px;
  padding: 16px;
  background-color: ${props => props.backgroundColor};
  width: 100%;
  flex: 1;
  min-height: 90px;
  max-height: 110px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Subtitle = styled.Text`
  text-align: center;
  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`