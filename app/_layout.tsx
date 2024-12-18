import {View,StyleSheet,ScrollView,Image} from 'react-native'
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from './components/icon'
export default function RootLayout() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Icon name='bars'></Icon>
        <Image style={{width:20,height:20,}} source={require('./public/logo calm.png')}></Image>
        <Icon name='user'></Icon>
      </View>
    <ScrollView style={{flexGrow:1}}>
        <Slot/>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    padding:20,
    height:60,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
    backgroundColor:'#314245'
  },
  mainContainer:{
    flex:1,
  }
})
