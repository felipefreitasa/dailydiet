import { SafeAreaView, StatusBar, View } from "react-native"

type Props = {
  backgroundColor: string;
}

export function StatusBarDefault({ backgroundColor }: Props){
  return(
    <View 
      style={{ 
        marginBottom: StatusBar.currentHeight,
        backgroundColor
      }}
    >
      <SafeAreaView>
        <StatusBar 
          translucent 
          backgroundColor={backgroundColor}
          barStyle='dark-content' 
        />
      </SafeAreaView>
    </View>
  )
}