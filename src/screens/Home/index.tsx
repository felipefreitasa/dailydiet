import { HeaderHome } from "@components/HeaderHome"
import { MealsPercentageInTheDiet } from "@components/MealsPercentageInTheDiet"
import { Button } from "@components/Button"
import { Meal } from "@components/Meal"

import { AddMealContainer, AddMealLabel, Container, Date, MealsContainer } from "./styles"

export function Home(){
  return (
    <Container>
      <HeaderHome
        userName="FF"
      />

      <MealsPercentageInTheDiet 
        percentage={90}
      />

      <AddMealContainer>
        <AddMealLabel>
          Refeições
        </AddMealLabel>

        <Button
          title='Nova refeição'
          icon='ADD'
        />
      </AddMealContainer>

      <MealsContainer>
        <Date>
          12.08.22
        </Date>

        <Meal
          hour='20:00'
          mealName='Whey com banana'
          isInTheDiet
        />
      </MealsContainer>
    </Container>
  )
}