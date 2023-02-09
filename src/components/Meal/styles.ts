import { TouchableOpacity } from "react-native"

import styled, { css } from "styled-components/native"

type Props = {
  isInTheDiet: boolean
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  margin-bottom: 8px;
  padding: 14px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LeftContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  margin: 0px 12px;
`

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const Point = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 50px;
  background-color: ${({ theme, isInTheDiet }) => isInTheDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}
`
