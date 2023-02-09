import styled, { css } from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  padding: 20px 20px 0 20px;
`

export const AddMealContainer = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 32px;
`

export const AddMealLabel = styled.Text`
margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const MealsContainer = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  width: 100%;
`

export const Date = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const MealsDay = styled.View`
  margin-bottom: 32px;
`

export const BottomMealsGradient = styled(LinearGradient)`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  z-index: 1;
`