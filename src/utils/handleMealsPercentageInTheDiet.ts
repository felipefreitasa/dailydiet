import { MealTypeProps } from "@screens/Home"

type Props = MealTypeProps[] | undefined

export function handleMealsPercentageInTheDiet (allMeals: Props) {
    const totalMeals = allMeals?.length
    const totalMealsInTheDiet = allMeals?.filter(meal => meal.isInTheDiet).length

    if (totalMeals && totalMealsInTheDiet){
      const totalMealsPercentageInTheDiet = totalMealsInTheDiet / totalMeals * 100
      
      return Number(totalMealsPercentageInTheDiet.toFixed(2))
    }
  }