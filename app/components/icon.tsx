import {View,TouchableOpacity} from 'react-native'
import Icone from '@expo/vector-icons/FontAwesome6'
import {useRouter} from 'expo-router'
export default function Icon ({
    name
}:{name?:string}){
    return(
        <View>
            <TouchableOpacity>
                <Icone name={name} size={30} color='black'/>
            </TouchableOpacity>
        </View>
    )
}