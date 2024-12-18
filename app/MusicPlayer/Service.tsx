import TrackPlayer ,{ AppKilledPlaybackBehavior, Capability } from "react-native-track-player";
export async function PlayerSetting (){
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
        android:{
            appKilledPlaybackBehavior:AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
        },
        capabilities:[
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious
        ],
        compactCapabilities:[Capability.Play,Capability.Pause]
    });
}