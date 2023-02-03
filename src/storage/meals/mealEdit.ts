import { mealCreate } from "./mealCreate"
import { mealRemove } from "./mealRemove"

export async function mealEdit(id: string, name: string, description: string, date: string, hour: string, isInTheDiet: boolean){
  try {
    await mealRemove(id)

    await mealCreate(name, description, date, hour, isInTheDiet)

  } catch (error) {
    throw error
  }
}