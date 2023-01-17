import { HeaderHome } from "@components/HeaderHome"
import { MealsPercentageInTheDiet } from "@components/MealsPercentageInTheDiet"
import { Button } from "@components/Button"
import { Meal } from "@components/Meal"

import { AddMealContainer, AddMealLabel, Container, Date, MealsContainer } from "./styles"
import { useNavigation } from "@react-navigation/native"

export function Home(){
  const navigation = useNavigation()

  function handleGoToStatistics(){
    navigation.navigate('statistics', { mealsPercentageInTheDiet: 45.98 })
  }

  return (
    <Container>
      <HeaderHome
        userName="FF"
      />

      <MealsPercentageInTheDiet 
        percentage={45.98}
        onPress={handleGoToStatistics}
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