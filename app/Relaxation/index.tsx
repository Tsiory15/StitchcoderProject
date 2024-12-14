import { Audio } from 'expo-av';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function MusicPlayer() {
      const [son,setSon] = useState<Audio.Sound | null>(null);
      const [play,setPlay] = useState(false);
      const Player = async () => {
          if (!son){
              const {sound:newSound} = await Audio.Sound.createAsync(
                  require('../public/5-Minute_Meditation_You_Can_Do_Anywhere(128k).mp3')
              );
              setSon(newSound);
              await newSound.playAsync();
              setPlay(true);
          }else{
              await son.playAsync();
              setPlay(true);
          }
      };
  
      const pause = async () => {
          if(son){
              await son.pauseAsync();
              setPlay(false);
          }
      }
  return (
    <View style={styles.container}>
      <View style={{marginBottom:20}}>
        <Text style={{alignSelf:'center',fontFamily:'InriaSerif-Regular',color:"white",fontSize:20, marginVertical:10,}}>Meditation</Text>
        <Text style={{marginHorizontal:10,color:"white",textAlign:'center'}}>Un coach vocal qui vous guide tout au long de la séance</Text>
      </View>
      <View style={styles.border}>
      <Image 
        style={styles.illustration} 
        source={require('../public/5.png')} 
      />
      </View>
      <Text style={styles.timer}>12:00</Text>
      <TouchableOpacity style={styles.control}>
        <Text style={{color:"white"}} onPress={play ? pause : Player}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28373A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  illustration: {
    width: 200,
    height: 200,
  },
  border:{
    marginBottom:30,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:5,
    borderColor:'white',
    borderRadius:200,
    width:250,
    height:250,
  },
  timer: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  control: {
    justifyContent:"center",
    alignItems:'center',
    borderRadius:10,
    height:40,
    width:180,
    backgroundColor:"#92E3AB",
    marginVertical: 20,
  },
});