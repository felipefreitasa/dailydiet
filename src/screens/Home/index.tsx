import { useCallback, useState } from "react"
import { Alert } from "react-native"

import { useNavigation, useFocusEffect } from "@react-navigation/native"

import { removeDateFormat } from "@utils/removeDateFormat"
import { handleOrderMealsByDate } from "@utils/handleOrderMealsByDate"

import { mealsGetAll } from "@storage/meals/mealsGetAll"

import { HeaderHome } from "@components/HeaderHome"
import { MealsPercentageInTheDiet } from "@components/MealsPercentageInTheDiet"
import { Button } from "@components/Button"
import { Meal } from "@components/Meal"
import { Loading } from "@components/Loading"

import { AddMealContainer, AddMealLabel, Container, Date, MealsContainer, MealsDay } from "./styles"

export type MealTypeProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isInTheDiet: boolean;
}

export function Home(){
  const [meals, setMeals] = useState<MealTypeProps[][]>()
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  async function fetchMeals(){
    try {
      setIsLoading(true)
      
      const data = await mealsGetAll()

      const mealsOrderedByDate = handleOrderMealsByDate(data)
      setMeals(mealsOrderedByDate)

      setIsLoading(false)
      
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível carregas as refeições.')
      
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))

  return (
    <Container>
      <HeaderHome />

      <MealsPercentageInTheDiet 
        percentage={45.98}
        onPress={() => navigation.navigate('statistics', { mealsPercentageInTheDiet: 45.98 })}
      />

      <AddMealContainer>
        <AddMealLabel>
          Refeições
        </AddMealLabel>

        <Button
          title='Nova refeição'
          icon='ADD'
          onPress={() => navigation.navigate('mealRegister', { isRegister: true })}
        />
      </AddMealContainer>

     {isLoading ? <Loading/> : (
        <MealsContainer>
          {meals?.map((date, index) => (
            <MealsDay key={index}>
              <Date>
                {removeDateFormat(date[0].date)}
              </Date>

              {date.map((mealItem) => (
                <Meal
                  key={mealItem.id}
                  hour={mealItem.hour}
                  mealName={mealItem.name}
                  isInTheDiet={mealItem.isInTheDiet}
                  onPress={() => navigation.navigate('mealDetails', { ...mealItem })}
                />
              ))}
            </MealsDay>
          ))}
        </MealsContainer>
     )}
    </Container>
  )
}