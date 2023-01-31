import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 90%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 8px;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 32px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

