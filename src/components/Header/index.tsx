import { useNavigation } from "@react-navigation/native"

import { ArrowLeft } from "phosphor-react-native"

import { IconContainer, Container, Title } from "./styles"

type Props = {
  arrowColor: string;
  backgroundColor: string; 
  title?: string;
}

export function Header({ arrowColor, backgroundColor, title }: Props){
  const navigation = useNavigation()

  return(
    <Container backgroundColor={backgroundColor}>
      <IconContainer onPress={() => navigation.goBack()}>
        <ArrowLeft
          size={24}
          color={arrowColor}
        />
      </IconContainer>

      <Title>
        {title}
      </Title>
    </Container>
  )
}