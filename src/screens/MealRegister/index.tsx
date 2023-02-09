import { useState } from "react"

import { Alert, View } from "react-native"

import { useNavigation, useRoute } from "@react-navigation/native"

import { useTheme } from "styled-components/native"

import moment from "moment"

import { mealCreate } from '@storage/meals/mealCreate'
import { mealEdit } from "@storage/meals/mealEdit"

import { MealTypeProps } from "@screens/Home"

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { RoundedContainer } from "@components/RoundedContainer"
import { SelectButton } from "@components/SelectButton"
import { Button } from "@components/Button"
import { MaskedInput } from "@components/MaskedInput"
import { StatusBarDefault } from "@components/StatusBarDefault"

import { Content, InputContainer, Label, RowContainer, TopContainer } from "./styles"

export type SelectProps = 'sim' | 'não'

type RouteParamsTypeProps = MealTypeProps & {
  isRegister: boolean;
}

export function MealRegister(){
  const route = useRoute()
  const { id, isInTheDiet, date, description, hour, name, isRegister  } = route.params as RouteParamsTypeProps

  const[mealName, setMealName] = useState(isRegister ? "" : name)
  const[mealDescription, setMealDescription] = useState(isRegister ? "" : description)
  const[mealDate, setMealDate] = useState(isRegister ? moment().format('DD/MM/YYYY') : date)
  const [mealHour, setMealHour] = useState(isRegister ? moment().format('HH:mm') : hour) 
  const [isMealSelected, setIsMealSelected] = useState<SelectProps>(isRegister ? 'sim' : (isInTheDiet ? 'sim' : 'não'))
  const [isValidated, setIsValidated] = useState(false)

  const navigation = useNavigation()

  const { COLORS } = useTheme()

  async function handleRegisterMeal(){
    try {
      const hasInputsBeenValidated = validateInputFields()

      if(hasInputsBeenValidated) {
        const isMealInTheDiet = isMealSelected === 'sim' ? true : false
        
        await mealCreate(mealName, mealDescription, mealDate, mealHour, isMealInTheDiet)
        
        navigation.navigate('feedback', { isMealInTheDiet: isMealSelected })
      }

    } catch (error) {
      Alert.alert('Nova refeição', 'Não foi possível cadastrar a refeição. Tente novamente.')
    }
  }

  function validateInputFields(){
    setIsValidated(true)

    if (mealName.length === 0){
      Alert.alert('Nova refeição', 'Preencha o nome da refeição.')
      return false
    }

    if (mealDescription.length === 0){
      Alert.alert('Nova refeição', 'Preencha a descrição da refeição.')
      return false
    }

    if (mealDate.length === 0){
      Alert.alert('Nova refeição', 'Preencha a data da refeição.')
      return false
    }

    if (mealHour.length === 0){
      Alert.alert('Nova refeição', 'Preencha a hora da refeição.')
      return false
    }

    return true
  }

  async function handleEditMeal(){
    try {
      const isMealInTheDiet = isMealSelected === 'sim' ? true : false

      await mealEdit(id, mealName, mealDescription, mealDate, mealHour, isMealInTheDiet)

      navigation.navigate('feedback', { isMealInTheDiet: isMealSelected })

    } catch (error) {
      Alert.alert('Editar refeição', 'Não foi possível editar a refeição.')
    }
  }
 
  return (
    <>
      <StatusBarDefault backgroundColor={COLORS.GRAY_5}/>

      <Header
        arrowColor={COLORS.GRAY_2}
        backgroundColor={COLORS.GRAY_5}
        title={ isRegister ? 'Nova refeição' : 'Editar refeição' }
      />
        
      <RoundedContainer backgroundColor={COLORS.GRAY_5}>
        <Content>
          <TopContainer>
            <Input
              label='Nome'
              value={mealName}
              onChangeText={e => setMealName(e)}
              autoCorrect={false}
              hasError={isValidated && mealName.length === 0}
              errorMessage="Campo obrigatório*"
            />

            <Input
              label='Descrição'
              isDescription
              value={mealDescription}
              onChangeText={e => setMealDescription(e)}
              autoCorrect={false}
              hasError={isValidated && mealDescription.length === 0}
              errorMessage="Campo obrigatório*"
            />
              
            <RowContainer>
              <InputContainer>
                <MaskedInput
                  type='datetime'
                  options={{ format: 'DD/MM/YYYY' }}
                  label='Data'
                  value={mealDate}
                  onChangeText={e => setMealDate(e)}
                  hasError={isValidated && mealDate.length === 0}
                  errorMessage="Campo obrigatório*"
                />
              </InputContainer>

              <InputContainer>
                <MaskedInput
                  type='datetime'
                  options={{ format: 'HH:mm' }}
                  label='Hora'
                  value={mealHour}
                  onChangeText={e => setMealHour(e)}
                  hasError={isValidated && mealHour.length === 0}
                  errorMessage="Campo obrigatório*"
                />
              </InputContainer> 
            </RowContainer>

            <View>
              <Label>
                Está dentro da dieta ?
              </Label>

              <RowContainer>
                <SelectButton
                  type="AFFIRMATIVE"
                  isSelected={isMealSelected === 'sim'}
                  label='Sim'
                  onPress={() => setIsMealSelected('sim')}
                />

                <SelectButton
                  type="NEGATIVE"
                  isSelected={isMealSelected === 'não'}
                  label='Não'
                  onPress={() => setIsMealSelected('não')}
                />
              </RowContainer>
            </View>
          </TopContainer>

          <Button
            title={isRegister ? "Cadastrar refeição" : "Salvar alterações"}
            style={{ width: '100%' }}
            onPress={isRegister ? handleRegisterMeal : handleEditMeal}
          />
        </Content>
      </RoundedContainer>
    </>
  )
}