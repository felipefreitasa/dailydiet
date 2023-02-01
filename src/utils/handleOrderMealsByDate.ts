import { MealTypeProps } from "@screens/Home"

import _ from 'lodash'

export function handleOrderMealsByDate(meals: MealTypeProps[]){
  const mealsListAgrouppedByDate = _.groupBy(meals, 'date')
  const mealsGroupArray = Object.values(mealsListAgrouppedByDate)

  return mealsGroupArray
}