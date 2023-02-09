import AsyncStorage from "@react-native-async-storage/async-storage"

import { MEAL_COLLECTION } from "@storage/storageConfig"

import { mealsGetAll } from "./mealsGetAll"

export async function mealRemove(id: string){
  try {

    const storedMeals = await mealsGetAll()

    const filteredMeals = storedMeals.filter(meal => meal.id !== id)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredMeals))
    
  } catch (error) {
    throw error
  }
}