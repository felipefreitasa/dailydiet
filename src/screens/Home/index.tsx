import { useNavigation } from "@react-navigation/native"

import _ from 'lodash'
import { removeDateFormat } from "@utils/removeDateFormat"
import { mealsListMock } from "./mealsListMock"

import { HeaderHome } from "@components/HeaderHome"
import { MealsPercentageInTheDiet } from "@components/MealsPercentageInTheDiet"
import { Button } from "@components/Button"
import { Meal } from "@components/Meal"

import { AddMealContainer, AddMealLabel, Container, Date, MealsContainer, MealsDay } from "./styles"

export type MealTypeProps = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isInTheDiet: boolean;
}

export function Home(){
  const navigation = useNavigation()

  function handleGoToStatistics(){
    navigation.navigate('statistics', { mealsPercentageInTheDiet: 45.98 })
  }

  function handleGoToMealRegister(){
    navigation.navigate('mealRegister')
  }

  function handleGoToMealDetails(mealDetails: MealTypeProps){
    navigation.navigate('mealDetails', { ...mealDetails })
  }

  const mealsListAgrouppedByDate = _.groupBy(mealsListMock, 'date')
  const mealsGroup = Object.values(mealsListAgrouppedByDate)
  
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
          onPress={handleGoToMealRegister}
        />
      </AddMealContainer>
      
      <MealsContainer>
        {mealsGroup.map((date, index) => (
          <MealsDay key={index}>
            <Date>
              {removeDateFormat(date[0].date)}
            </Date>

            {date.map((mealItem, index) => (
              <Meal
                key={index}
                hour={mealItem.hour}
                mealName={mealItem.name}
                isInTheDiet={mealItem.isInTheDiet}
                onPress={() => handleGoToMealDetails(mealItem)}
              />
            ))}
          </MealsDay>
        ))}
      </MealsContainer>
    </Container>
  )
}