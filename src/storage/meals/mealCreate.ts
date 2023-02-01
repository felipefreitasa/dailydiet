import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'

import { mealsGetAll } from './mealsGetAll'

export async function mealCreate(name: string, description: string, date: string, hour: string, isInTheDiet: boolean){
  try {
    const storedMeals = await mealsGetAll()
    
    const storage = JSON.stringify([...storedMeals, { name, description, date, hour, isInTheDiet }])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)

  } catch (error) {
    throw error
  }
}