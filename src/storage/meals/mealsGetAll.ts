import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealTypeProps } from '@screens/Home'

import { MEAL_COLLECTION } from '@storage/storageConfig'

export async function mealsGetAll(){
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealTypeProps[] = storage ? JSON.parse(storage) : []

    return meals

  } catch (error) {
    throw error
  }
}