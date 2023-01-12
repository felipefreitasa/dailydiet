import { StatusBar } from 'react-native'

import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { Home } from '@screens/Home'

import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Home/> : <Loading/>}
    </ThemeProvider>
  );
}