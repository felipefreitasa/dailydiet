import { StatusBar } from "react-native"

import { useTheme } from "styled-components/native"

import { useRoute } from "@react-navigation/native"

import { Header } from "@components/Header"

import { Container } from "./styles"

type RouteParams = {
  isMealInTheDiet: boolean
}

export function MealDetails(){
  const { COLORS } = useTheme()

  const route = useRoute()
  const { isMealInTheDiet } = route.params as RouteParams

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={isMealInTheDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        translucent
      />

      <Container>
        <Header
          arrowColor={COLORS.GRAY_2}
          backgroundColor={isMealInTheDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
          title='Refeição'
        />
      </Container>
    </>
  )
}