import { Image, StatusBar } from "react-native"

import { useNavigation, useRoute } from "@react-navigation/native"

import SuccessIllustration from '@assets/success-illustration.png'
import ErrorIllustration from '@assets/error-illustration.png'

import { Button } from "@components/Button"

import {  Container, SelectTypeProps, Subtitle, SubtitleHighlight, Title} from "./styles"

export type RouteParams = {
  isMealInTheDiet: SelectTypeProps
}

export function Feedback(){
  const route = useRoute()
  const { isMealInTheDiet } = route.params as RouteParams

  const navigation = useNavigation()

  const isInTheDiet = isMealInTheDiet === 'sim'

  function handleGoToHome(){
    navigation.navigate('home')
  }
  
  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      <Container>
        <Title isMealInTheDiet={isMealInTheDiet}>
          {isInTheDiet ? 'Continue assim!' : 'Que pena!'}
        </Title>

        <Subtitle>
          {isInTheDiet ? 'Você continua' : 'Você'}

          <SubtitleHighlight>
            {isInTheDiet ? ` dentro da dieta. ` : ` saiu da dieta `}
          </SubtitleHighlight>

          {isInTheDiet ? 'Muito bem!' : 'dessa vez, mas continue se esforçando e não desista!'}
        </Subtitle>

        {isInTheDiet ?  <Image source={SuccessIllustration}/> :  <Image source={ErrorIllustration}/>}

        <Button
          title="Ir para a página inicial"
          onPress={handleGoToHome}
          style={{ marginTop: 32 }}
        />
      </Container>
    </>
  )
}