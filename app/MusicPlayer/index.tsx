import {View,Text,Button,StyleSheet} from 'react-native'
import {Audio} from 'expo-av'
import React,{ useState } from 'react'
import Icon from '@expo/vector-icons/FontAwesome6'

export default function Player () {
    const [son,setSon] = useState<Audio.Sound | null>(null);
    const [play,setPlay] = useState(false);

    const Player = async () => {
        if (!son){
            const {sound:newSound} = await Audio.Sound.createAsync(
                require('../public/Adele_Hello.mp3')
            );
            setSon(newSound);
            await newSound.playAsync();
            setPlay(true);

            newSound.setOnPlaybackStatusUpdate((status) => {
                if(status.isLoaded && status.didJustFinish){
                    setPlay(false);
                }
            });
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

    const stop = async () => {
        if(son){
            await son.stopAsync();
            setPlay(false);
        }
    }
    return(
        <View style={styles.container}>
            <Icon name={play ? 'pause' : 'play'} size={50} onPress={play ? pause : Player} />
            <Icon name="stop" size={50} onPress={stop} />
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      alignSelf:'center',
      gap:20,
      backgroundColor:'gray',
      flexDirection:'row',
      width:'100%',
      flex:1
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
    },
  });
  