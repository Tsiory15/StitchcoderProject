import {View,StyleSheet,ScrollView} from 'react-native'
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <View>Icon</View>
        <View>Icon</View>
        <View>Icon</View>
      </View>
    <ScrollView style={styles.mainContainer}>
      <View style={{marginTop:50}}>
        <Slot/>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    height:50,
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    position:'fixed',
    zIndex:10,
    width:'100%',
    backgroundColor:'white'
  },
  mainContainer:{
    flex:1
  }
})
