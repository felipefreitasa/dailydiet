import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'

import { Container } from './styles'

export function Routes(){
  return (
    <Container>
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </Container>
  )
}