import styled, { css } from "styled-components/native"

type Props = {
  backgroundColor: string;
}

export const Container = styled.View<Props>`
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 20px;
  background-color: ${(props) => props.backgroundColor};
  position: relative;
`

export const IconContainer = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 32, left: 32, right: 32, bottom: 32 },
}))`
  position: absolute;
  left: 20px;
  width: 30px; 
  height: 30px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const Title = styled.Text`
text-align: center;
width: 100%;

   ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`