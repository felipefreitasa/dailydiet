import { Keyboard, TouchableWithoutFeedback } from "react-native"

import { Container, RoundedContentContainer } from "./styles"

type Props = {
  children: JSX.Element | JSX.Element[];
  backgroundColor: string;
}

export function RoundedContainer({ children, backgroundColor }: Props){
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container backgroundColor={backgroundColor}>
        <RoundedContentContainer>
          {children}
        </RoundedContentContainer>
      </Container>
    </TouchableWithoutFeedback>
  )
}