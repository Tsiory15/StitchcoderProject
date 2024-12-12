import {View,StyleSheet} from 'react-native'
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>Icon</View>
        <View>Icon</View>
        <View>Icon</View>
      </View>
      <Slot/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    height:50,
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row'
  }
})
