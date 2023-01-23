import styled, { css } from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export type SelectTypeProps = 'sim' | 'não'

type TitleProps = {
  isMealInTheDiet: SelectTypeProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<TitleProps>`
  text-align: center;
  margin-bottom: 8px;

  ${({ theme, isMealInTheDiet }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${  isMealInTheDiet === 'sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}  
`

export const Subtitle = styled.Text`
  text-align: center;
  margin-bottom: 40px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}  
`

export const SubtitleHighlight = styled(Subtitle)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`