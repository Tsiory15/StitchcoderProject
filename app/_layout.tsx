import {View,StyleSheet,ScrollView} from 'react-native'
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from './components/icon'
export default function RootLayout() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Icon name='bars'/>
        <View>Icon</View>
        <View>Icon</View>
      </View>
    <ScrollView style={{flexGrow:1}}>
        <Slot/>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    height:50,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
    backgroundColor:'white',
    padding:20
  },
  mainContainer:{
    flex:1,
  }
})
