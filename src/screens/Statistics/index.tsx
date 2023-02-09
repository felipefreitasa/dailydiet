import { useRoute } from "@react-navigation/native"

import { useTheme } from "styled-components/native"

import { MealTypeProps } from "@screens/Home"

import { Header } from "@components/Header"
import { StatisticCard } from "@components/StatisticCard"
import { RoundedContainer } from "@components/RoundedContainer"
import { StatusBarDefault } from "@components/StatusBarDefault"

import { MealsInTheDietContainer, Paragraph, Percentage, StatisticsTitle, RowContainer } from "./styles"

type RouteParams = {
  mealsPercentageInTheDiet: number;
  meals: MealTypeProps[]
}

export function Statistics(){
  const { COLORS } = useTheme()

  const route = useRoute()
  const { mealsPercentageInTheDiet, meals } = route.params as RouteParams

  const isGoodPercentage = mealsPercentageInTheDiet >= 70

  const mealsInTheDiet = meals.filter(meal => meal.isInTheDiet).length
  const mealsIsNotInTheDiet = meals.filter(meal => !meal.isInTheDiet).length

  return (
    <>
      <StatusBarDefault backgroundColor={isGoodPercentage ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}/>

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

      <RoundedContainer backgroundColor={isGoodPercentage ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}>
        <StatisticsTitle>
          Estatísticas gerais
        </StatisticsTitle>

        <StatisticCard
          title={meals.length}
          subtitle="refeições registradas"
          backgroundColor={COLORS.GRAY_6}
        />

        <RowContainer>
          <StatisticCard
            title={mealsInTheDiet}
            subtitle="refeições dentro da dieta"
            backgroundColor={COLORS.GREEN_LIGHT}
            style={{ marginRight: 12 }}
          />

          <StatisticCard
            title={mealsIsNotInTheDiet}
            subtitle="refeições fora da dieta"
            backgroundColor={COLORS.RED_LIGHT}
          />
        </RowContainer>
      </RoundedContainer>
    </>
  )
}