import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Avatar = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-width: 2px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`

export const AvatarName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_5};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`