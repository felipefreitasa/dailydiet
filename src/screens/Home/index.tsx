import { HeaderHome } from "@components/HeaderHome"
import { MealsPercentageInTheDiet } from "@components/MealsPercentageInTheDiet"
import { Button } from "@components/Button"
import { Meal } from "@components/Meal"

import { FullWidthContainer, AddMealLabel, Container, Date } from "./styles"

export function Home(){
  return (
    <Container>
      <HeaderHome
        userName="FF"
      />

      <MealsPercentageInTheDiet 
        percentage={90}
      />

      <FullWidthContainer>
        <AddMealLabel>
          Refeições
        </AddMealLabel>

        <Button
          title='Nova refeição'
          icon='ADD'
        />
      </FullWidthContainer>

      <FullWidthContainer>
        <Date>
          12.08.22
        </Date>

        <Meal
          hour='20:00'
          mealName='Whey com banana'
          isInTheDiet
        />
      </FullWidthContainer>
      
    </Container>
  )
}