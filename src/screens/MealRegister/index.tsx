import { useState } from "react"
import { Alert, StatusBar, View } from "react-native"

import { useNavigation, useRoute } from "@react-navigation/native"

import { useTheme } from "styled-components/native"

import { mealCreate } from '@storage/meals/mealCreate'

import { MealTypeProps } from "@screens/Home"

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { RoundedContainer } from "@components/RoundedContainer"
import { SelectButton } from "@components/SelectButton"
import { Button } from "@components/Button"
import { MaskedInput } from "@components/MaskedInput"

import {  Container, Content, InputContainer, Label, RowContainer, TopContainer } from "./styles"

export type SelectProps = 'sim' | 'não'

type RouteParamsTypeProps = MealTypeProps & {
  isRegister: boolean;
}

export function MealRegister(){
  const route = useRoute()
  const { isInTheDiet, date, description, hour, name, isRegister  } = route.params as RouteParamsTypeProps

  const[mealName, setMealName] = useState(isRegister ? "" : name)
  const[mealDescription, setMealDescription] = useState(isRegister ? "" : description)
  const[mealDate, setMealDate] = useState(isRegister ? "" : date)
  const [mealHour, setMealHour] = useState(isRegister ? "" : hour) 
  const [isMealSelected, setIsMealSelected] = useState<SelectProps>(isRegister ? 'sim' : (isInTheDiet ? 'sim' : 'não'))

  const navigation = useNavigation()

  const { COLORS } = useTheme()

  async function handleRegisterMeal(){
    try {
      const isMealInTheDiet = isMealSelected === 'sim' ? true : false

      await mealCreate(mealName, mealDescription, mealDate, mealHour, isMealInTheDiet)

      handleGoToFeedback()

    } catch (error) {
      Alert.alert('Nova refeição', 'Não foi possível cadastrar a refeição. Tente novamente.')
    }
  }

  function handleGoToFeedback(){
    navigation.navigate('feedback', { isMealInTheDiet: isMealSelected })
  }

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={COLORS.GRAY_5}
        translucent
      />

      <Container>
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
              />

              <Input
                label='Descrição'
                isDescription
                value={mealDescription}
                onChangeText={e => setMealDescription(e)}
                autoCorrect={false}
              />
              
              <RowContainer>
                <InputContainer>
                  <MaskedInput
                    type='datetime'
                    options={{ format: 'DD/MM/YYYY' }}
                    label='Data'
                    value={mealDate}
                    onChangeText={e => setMealDate(e)}
                  />
                </InputContainer>

                <InputContainer>
                  <MaskedInput
                    type='datetime'
                    options={{ format: 'HH:mm' }}
                    label='Hora'
                    value={mealHour}
                    onChangeText={e => setMealHour(e)}
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
              onPress={isRegister ? handleRegisterMeal : handleGoToFeedback}
            />
          </Content>
        </RoundedContainer>
      </Container>
    </>
  )
}