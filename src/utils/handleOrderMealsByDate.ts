import { MealTypeProps } from "@screens/Home"

import _ from 'lodash'

export function handleOrderMealsByDate(meals: MealTypeProps[]){
  const orderedMealsByDate = _.orderBy(meals, ['date'], ['desc'])

  const mealsListAgrouppedByDate = _.groupBy(orderedMealsByDate, 'date')
  const mealsGroupArray = Object.values(mealsListAgrouppedByDate)

  return mealsGroupArray
}