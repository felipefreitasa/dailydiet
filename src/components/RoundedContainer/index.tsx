import { Container, RoundedContentContainer } from "./styles"

type Props = {
  children: JSX.Element | JSX.Element[];
  backgroundColor: string;
}

export function RoundedContainer({ children, backgroundColor }: Props){
  return (
    <Container backgroundColor={backgroundColor}>
      <RoundedContentContainer>
        {children}
      </RoundedContentContainer>
    </Container>
  )
}