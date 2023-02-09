import { useCallback, useState } from "react"

import { Alert } from "react-native"

import { useNavigation, useFocusEffect } from "@react-navigation/native"

import { removeDateFormat } from "@utils/removeDateFormat"
import { handleOrderMealsByDate } from "@utils/handleOrderMealsByDate"
import { handleMealsPercentageInTheDiet } from "@utils/handleMealsPercentageInTheDiet"

import { mealsGetAll } from "@storage/meals/mealsGetAll"

import { HeaderHome } from "@components/HeaderHome"
import { MealsPercentageInTheDiet } from "@components/MealsPercentageInTheDiet"
import { Button } from "@components/Button"
import { Meal } from "@components/Meal"
import { Loading } from "@components/Loading"

import { AddMealContainer, AddMealLabel, BottomMealsGradient, Container, Date, MealsContainer, MealsDay } from "./styles"

export type MealTypeProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isInTheDiet: boolean;
}

export function Home(){
  const [allMeals, setAllMeals] = useState<MealTypeProps[]>()
  const [orderedMealsByDate, setOrderedMealsByDate] = useState<MealTypeProps[][]>()
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  const mealsPercentageInTheDiet = handleMealsPercentageInTheDiet(allMeals) || 0

  async function fetchMeals(){
    try {
      setIsLoading(true)
      
      const mealsData = await mealsGetAll()
      setAllMeals(mealsData)

      const mealsOrderedByDate = handleOrderMealsByDate(mealsData)
      setOrderedMealsByDate(mealsOrderedByDate)
      
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
        percentage={mealsPercentageInTheDiet}
        onPress={() => navigation.navigate('statistics', { mealsPercentageInTheDiet, meals: allMeals })}
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
        <>
          <MealsContainer>
            {orderedMealsByDate?.map((date, index) => (
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

          <BottomMealsGradient colors={['#FAFAFA90', '#FAFAFAF2']}/>
        </>
     )}
    </Container>
  )
}