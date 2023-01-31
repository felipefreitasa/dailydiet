import { useState } from "react"
import { StatusBar, View } from "react-native"

import { useTheme } from "styled-components/native"

import { useNavigation, useRoute } from "@react-navigation/native"

import { RoundedContainer } from "@components/RoundedContainer"
import { Header } from "@components/Header"
import { ChipStatus } from "@components/ChipStatus"
import { Button } from "@components/Button"
import { DeleteModal } from "./DeleteModal"

import { MealTypeProps } from "@screens/Home"

import { Container, Description, Name, ContentContainer, DateTimeTitle, Content } from "./styles"

export function MealDetails(){
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  const { COLORS } = useTheme()

  const navigation = useNavigation()

  const route = useRoute()
  const { isInTheDiet, date, description, hour, name } = route.params as MealTypeProps

  function handleGoToEditMeal(){
    navigation.navigate('mealRegister', { isRegister: false,  isInTheDiet, date, description, hour, name })
  }

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={isInTheDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        translucent
      />

      <Container>
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
                onPress={handleGoToEditMeal}
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
      </Container>

      <DeleteModal
        isVisible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onDelete={() => {setIsDeleteModalVisible(true)}}
      />
    </>
  )
}