import { StatusBar } from "react-native"
import { useRoute } from "@react-navigation/native"

import { useTheme } from "styled-components/native"

import { Header } from "@components/Header"
import { StatisticCard } from "@components/StatisticCard"

import {  Container, StatisticsContainer, RoundedContainer, MealsInTheDietContainer, Paragraph, Percentage, StatisticsTitle, RowContainer } from "./styles"

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
          />

          <MealsInTheDietContainer isGoodPercentage={isGoodPercentage}>
            <Percentage>
              {mealsPercentageInTheDiet}%
            </Percentage>

            <Paragraph>
              das refeições dentro da dieta
            </Paragraph>
          </MealsInTheDietContainer>

          <StatisticsContainer isGoodPercentage={isGoodPercentage}>
            <RoundedContainer>
              <StatisticsTitle>
                Estatísticas gerais
              </StatisticsTitle>

              <StatisticCard
                title={22}
                subtitle="melhor sequência de pratos dentro da dieta"
                backgroundColor={COLORS.GRAY_6}
              />

              <StatisticCard
                title={109}
                subtitle="refeições registradas"
                backgroundColor={COLORS.GRAY_6}
              />

              <RowContainer>
                <StatisticCard
                  title={99}
                  subtitle="refeições dentro da dieta"
                  backgroundColor={COLORS.GREEN_LIGHT}
                  style={{ marginRight: 12 }}
                />

                <StatisticCard
                  title={10}
                  subtitle="refeições fora da dieta"
                  backgroundColor={COLORS.RED_LIGHT}
                />
              </RowContainer>
            </RoundedContainer>
          </StatisticsContainer>
        </Container>
    </>
  )
}