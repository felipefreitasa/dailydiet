import { useState } from "react"
import { StatusBar, View } from "react-native"

import { useNavigation } from "@react-navigation/native"

import { useTheme } from "styled-components/native"

import { formatDate } from "@helpers/formatDate"
import { formatHour } from "@helpers/formatHour"

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { RoundedContainer } from "@components/RoundedContainer"
import { SelectButton } from "@components/SelectButton"
import { Button } from "@components/Button"

import {  Container, Content, InputContainer, Label, RowContainer, TopContainer } from "./styles"

export type SelectProps = 'sim' | 'não'

export function MealRegister(){
  const[name, setName] = useState("")
  const[description, setDescription] = useState("")
  const[date, setDate] = useState("")
  const [hour, setHour] = useState("")
  const [isSelected, setIsSelected] = useState<SelectProps>('sim')

  const navigation = useNavigation()

  const { COLORS } = useTheme()

  function handleGoToFeedback(){
    navigation.navigate('feedback', { isMealInTheDiet: isSelected })
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
          title='Nova refeição'
        />
        
        <RoundedContainer backgroundColor={COLORS.GRAY_5}>
          <Content>
            <TopContainer>
              <Input
                label='Nome'
                value={name}
                onChangeText={e => setName(e)}
                autoCorrect={false}
              />

              <Input
                label='Descrição'
                isDescription
                value={description}
                onChangeText={e => setDescription(e)}
                autoCorrect={false}
              />
              
              <RowContainer>
                <InputContainer>
                  <Input
                    label='Data'
                    value={formatDate(date)}
                    onChangeText={e => setDate(e)}
                    maxLength={10}
                    autoCorrect={false}
                    keyboardType='numeric'
                  />
                </InputContainer>

                <InputContainer>
                  <Input
                    label='Hora'
                    value={formatHour(hour)}
                    onChangeText={e => setHour(e)}
                    maxLength={5}
                    autoCorrect={false}
                    keyboardType='numeric'
                  />
                </InputContainer>
              </RowContainer>

              <View>
                <Label>Está dentro da dieta ?</Label>

                <RowContainer>
                  <SelectButton
                    type="AFFIRMATIVE"
                    isSelected={isSelected === 'sim'}
                    label='Sim'
                    onPress={() => setIsSelected('sim')}
                  />

                  <SelectButton
                    type="NEGATIVE"
                    isSelected={isSelected === 'não'}
                    label='Não'
                    onPress={() => setIsSelected('não')}
                  />
                </RowContainer>
              </View>
            </TopContainer>

            <Button
              title="Cadastrar refeição"
              style={{ width: '100%' }}
              onPress={handleGoToFeedback}
            />
          </Content>
        </RoundedContainer>
      </Container>
    </>
  )
}