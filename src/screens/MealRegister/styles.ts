import styled, { css } from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const TopContainer = styled.View`
  width: 100%;
`

export const Content = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
`

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const InputContainer = styled.View`
  width: 48%;
`

export const Label = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

