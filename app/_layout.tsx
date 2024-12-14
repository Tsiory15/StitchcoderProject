import {View,StyleSheet,ScrollView,Image} from 'react-native'
import { Slot } from "expo-router";
import Icon from './Component/Icon';
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Icon name='bars'></Icon>
        <Image style={{width:20,height:20,}} source={require('./public/logo calm.png')}></Image>
        <Icon name='user'></Icon>
      </View>
    <ScrollView style={styles.mainContainer}>
      <View>
        <Slot/>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    height:60,
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    position:'fixed',
    zIndex:10,
    width:'100%',
    backgroundColor:'#314245'
  },
  mainContainer:{
    flex:1
  }
})
