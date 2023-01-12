import { TouchableOpacity, View } from 'react-native'

import styled, { css } from 'styled-components/native'

export type SelectTypeStyleProps = 'AFFIRMATIVE' | 'NEGATIVE'

type Props = {
  isSelected: boolean;
  type: SelectTypeStyleProps;
}

type CircleProps = {
  type: SelectTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  border-radius: 6px;
  border-width: 1px;
  padding: 16px;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-height: 50px;
  min-height: 50px;

  margin-right: ${({type}) => type === 'AFFIRMATIVE' ? '8px' : '0px'};

  ${({isSelected, theme, type}) => {
    switch(isSelected){
      case true:
        return css`
          background-color: ${type === 'AFFIRMATIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
          border-color: ${type === 'AFFIRMATIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        `;

      case false:
        return css`
          background-color: ${theme.COLORS.GRAY_6};
          border-color: transparent;
        `
    }
  }}
`

export const Circle = styled(View)<CircleProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, type }) => type === 'AFFIRMATIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 8px;
  margin-right: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`