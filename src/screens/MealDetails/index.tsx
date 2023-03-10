import { useState } from "react"

import { Alert, View } from "react-native"

import { useTheme } from "styled-components/native"

import { useNavigation, useRoute } from "@react-navigation/native"

import { mealRemove } from "@storage/meals/mealRemove"

import { MealTypeProps } from "@screens/Home"

import { RoundedContainer } from "@components/RoundedContainer"
import { Header } from "@components/Header"
import { ChipStatus } from "@components/ChipStatus"
import { Button } from "@components/Button"
import { DeleteModal } from "./DeleteModal"
import { StatusBarDefault } from "@components/StatusBarDefault"

import { Description, Name, ContentContainer, DateTimeTitle, Content } from "./styles"

export function MealDetails(){
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  const { COLORS } = useTheme()

  const navigation = useNavigation()

  const route = useRoute()
  const { id, isInTheDiet, date, description, hour, name } = route.params as MealTypeProps

  async function handleDeleteMeal(){
    try {
      await mealRemove(id)

      setIsDeleteModalVisible(false)

      navigation.navigate('home')

    } catch (error) {
      Alert.alert('Apagar refeição', 'Não foi possível apagar essa refeição.')
    }
  }

  return (
    <>
      <StatusBarDefault backgroundColor={isInTheDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}/>

      <Header
        arrowColor={COLORS.GRAY_2}
        backgroundColor={isInTheDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        title='Refeição'
      />

      <RoundedContainer backgroundColor={isInTheDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}>
        <Content>
          <View>
            <ContentContainer>
              <Name>
                {name}
              </Name>

              <Description>
                {description}
              </Description>
            </ContentContainer>

            <ContentContainer>
              <DateTimeTitle>
                Data e hora
              </DateTimeTitle>

              <Description>
                {`${date} às ${hour}`}
              </Description>
            </ContentContainer>

            <ChipStatus isInTheDiet={isInTheDiet}/>
          </View>

          <View>
            <Button
              title='Editar refeição'
              icon='EDIT'
              onPress={() => navigation.navigate('mealRegister', { id, isRegister: false,  isInTheDiet, date, description, hour, name })}
              style={{ marginBottom: 8 }}
            />

            <Button
              title='Excluir refeição'
              icon='REMOVE'
              type='OUTLINED'
              onPress={() => setIsDeleteModalVisible(true)}
            />
          </View>
        </Content>
      </RoundedContainer>

      <DeleteModal
        isVisible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onDelete={handleDeleteMeal}
      />
    </>
  )
}