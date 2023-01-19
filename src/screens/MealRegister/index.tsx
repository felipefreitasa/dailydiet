import { StatusBar } from "react-native"

import { useTheme } from "styled-components/native"

import { Header } from "@components/Header"

import {  Container } from "./styles"
import { RoundedContainer } from "@components/RoundedContainer"


export function MealRegister(){
  const { COLORS } = useTheme()

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={COLORS.GRAY_5}
        translucent
      />

      <Container>
        <Header
          arrowColor={COLORS.GRAY_2}
          backgroundColor={COLORS.GRAY_5}
          title='Nova refeição'
        />
        
        <RoundedContainer backgroundColor={COLORS.GRAY_5}>
         
        </RoundedContainer>
      </Container>
    </>
  )
}