import {View,StyleSheet,TouchableOpacity,Text, Image} from "react-native";
import React,{ useEffect,useState } from "react";
import Slider from "@react-native-community/slider";
import TrackPlayer,{usePlaybackState,useProgress,State} from "react-native-track-player";
import {PlayerSetting}from './Service'
import Icon from '@expo/vector-icons/FontAwesome6'

const Track = [{
    id:'1',
    url:require('../public/Adele_Hello.mp3'),
    title:'Song1',
    artist:'Artist1'
},
{
    id:'2',
    url:require('../public/Heart_Attack.mp3'),
    title:'Song2',
    artist:'Artist2'
},
]

export default function Player(){
    const playBackState = usePlaybackState();
    const {position,duration} = useProgress();
    const [track,setTrack] = useState(0);


    useEffect(()=>{
        const initialisePlayer = async () => {
            await PlayerSetting();
            await TrackPlayer.add(Track)   
        }
    initialisePlayer();
    return() => {
        const clean = async () => {
            await TrackPlayer.reset();
        };
        clean();
    }
    }  
,[]);
const PlayPause = async () => {
    const state = typeof playBackState === 'object' ? playBackState.state : playBackState;
    if(state === State.Playing){
        await TrackPlayer.pause();
    }else{
        await TrackPlayer.play();
    }
}

const Next = async () => {
    await TrackPlayer.skipToNext();
    setTrack((prev) => (prev - 1 + Track.length));
};

const Prev = async () => {
    await TrackPlayer.skipToPrevious();
    setTrack((prev) => (prev - 1 + Track.length) % Track.length);
}

const currentState = typeof playBackState === 'object' ? playBackState.state : playBackState;
    return(
        <View style={styles.playerMainContainer}>
            <Image source={require('../public/4.png')} style={{ width: 230, height: 230 }}/>
            <Slider
            style={{width:'80%',height:40}}
            value={position}
            minimumValue={0}
            maximumValue={duration}
            onSlidingComplete={(value) => TrackPlayer.seekTo(value)}
            />
            <View style={styles.durationContainer}>
                <Text>{Math.floor(position)}s</Text>
                <Text>{Math.floor(duration)}s</Text>
            </View>
            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={Prev}>
                        <Icon name='backward' size={50}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={PlayPause}>
                        <Icon name={currentState === State.Playing ? 'play' : 'pause'} size={50}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Next}>
                        <Icon name='forward' size={50}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    playerMainContainer:{
        flex:1,
        padding:10,
        backgroundColor:'gray',
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        gap:50
    },
    durationContainer:{
        position:'relative',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%'
    }

})