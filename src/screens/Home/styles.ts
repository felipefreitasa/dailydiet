import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  padding: 20px;
`

export const FullWidthContainer = styled.View`
  width: 100%;
  margin-top: 40px;
`

export const AddMealLabel = styled.Text`
margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const Date = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`