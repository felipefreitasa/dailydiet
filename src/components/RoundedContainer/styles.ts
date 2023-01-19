import styled from "styled-components/native"

type Props = {
  backgroundColor: string;
}

export const Container = styled.View<Props>`
background-color: ${props => props.backgroundColor};
  flex: 1;
`

export const RoundedContentContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px 20px 20px;
`