import * as React from 'react';
import { Image,  View,  TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default TaskbarItem = () => {
    const uNavigation = useNavigation();

    const ListMusic = () => {
        uNavigation.navigate('ListMusic')
    };
    return(
        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <TouchableOpacity><Feather name={'x'} style={{ color: '#EDEDED', fontSize: 30, }} /></TouchableOpacity>
                <TouchableOpacity><Feather name={'skip-back'} style={{ color: '#EDEDED', fontSize: 30, }} /></TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50 }} onPress={ListMusic}>
                    <Image source={require('../../assets/download.jpg')} style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 100, }}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity><Feather name={'pause'} style={{ color: '#EDEDED', fontSize: 30, }} /></TouchableOpacity>
                <TouchableOpacity><Feather name={'skip-forward'} style={{ color: '#EDEDED', fontSize: 30, }} /></TouchableOpacity>
            </View>
    )
}