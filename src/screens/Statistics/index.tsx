import { StatusBar } from "react-native"
import { useRoute } from "@react-navigation/native"

import { useTheme } from "styled-components/native"

import {  Container } from "./styles"
import { Header } from "@components/Header"

type RouteParams = {
  mealsPercentageInTheDiet: number;
}

export function Statistics(){
  const { COLORS } = useTheme()

  const route = useRoute()
  const { mealsPercentageInTheDiet } = route.params as RouteParams
  
  const isGoodPercentage = mealsPercentageInTheDiet >= 70

  return (
    <>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={isGoodPercentage ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
          translucent
        />

        <Container>
          <Header
            backgroundColor={isGoodPercentage ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
            arrowColor={isGoodPercentage ? COLORS.GREEN_DARK : COLORS.RED_DARK}
            title='Refeição'
          />

          
        </Container>
    </>
  )
}