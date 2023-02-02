import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'

import { mealsGetAll } from './mealsGetAll'

import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

export async function mealCreate(name: string, description: string, date: string, hour: string, isInTheDiet: boolean){
  try {
    const storedMeals = await mealsGetAll()
    
    const storage = JSON.stringify([...storedMeals, { id: uuidv4(), name, description, date, hour, isInTheDiet }])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)

  } catch (error) {
    throw error
  }
}