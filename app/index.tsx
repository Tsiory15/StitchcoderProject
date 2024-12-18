import { Text, View,StyleSheet,Image,TouchableOpacity } from "react-native";
import {useRouter} from 'expo-router'
export default function Index() {
  const router = useRouter()
  return (
    <View style={styles.mainContainer}>
      <View style={{marginBottom:20}}>
        <Text style={{color:"white"}}>Bonjour,Luck Explorez des ressources pour le bien-être du corps et de l'ésprit</Text>
      </View>
      <View style={{width:'100%',alignItems:'center'}}>
          <Image source={require('./public/1.png')} style={{ width: 230, height: 230 }}/>
          <View style={styles.introduction}>
            <Text>Commencer à vous relaxez Installez-vous confortablement. Fermez les yeux et commencez à vous détendre</Text>
          </View>
      </View>
      <View style={styles.ratingContainer}>
        <Text>Rating</Text>
      </View>
      {/* Navigation */}
      <View style={{width:'100%',marginBottom:20}}>
        <Text style={{fontSize:20, color:"white"}}>What do you need?</Text>
      </View>
      <View style={styles.imageContainer}>

        <TouchableOpacity style={styles.Card} onPress={() => router.push('./Relaxation')}>
          <Image source={require('./public/3.png')} style={styles.imagePosition}/>
          <View>
            <Text>Relaxation Relacher votre stress</Text>
            <Text style={styles.textStyle}>5-12 MIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Card} onPress={() => router.push('./MusicPlayer')}>
          <Image source={require('./public/2.png')} style={styles.imagePosition}/>
          <View>
            <Text>Music Music de détente</Text>
            <Text style={styles.textStyle}>5-58 MIN</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'#28373A',
    flex:1,
    alignItems:'center',
    padding:20
  },
  imageContainer:{
    flexDirection:'row',
    gap:30
  },
  Card:{
    width:'47%',
    height:150,
    borderStyle:'solid',
    borderWidth:1,
    overflow:'hidden',
    borderRadius:10,
    borderColor:'white',
    backgroundColor:'white',
    position:'relative',
    // justifyContent:'center',
    padding:20
  },
  imagePosition:{
    position:'absolute',
    right:-60,
    width:150,
    height:150,
  },
  textStyle:{
    position:'absolute',
    bottom:-50,
    fontWeight:'bold'
  },
  ratingContainer:{
    height:50,
    width:'100%',
    justifyContent:'center',
    backgroundColor:'white',
    alignItems:'center',
    margin:20
  },
  introduction:{
    position:'absolute',
    backgroundColor:'white',
    padding:10,
    width:'85%',
    opacity:0.7,
    bottom:0,
    borderRadius:10
  }
})
