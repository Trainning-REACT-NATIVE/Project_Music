import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
const { width } = Dimensions.get('screen');
export default AlbumItem = ({item, onPress}) => {
    return(
        <TouchableOpacity style={styles.s1}>
                    <Image source={item.src} style={{width:50,height:50,borderRadius: 15,}} />
                    <View style={{marginLeft: 10,}}>
                        <Text style={{color: '#ffffff',fontSize: 12,}}>{item.nameAlbum}</Text>
                        <Text style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 10}}>{item.numberSong} Songs</Text>
                    </View>
                </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    s1: {
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:30,
        marginRight:30,
        marginBottom:5,
        marginTop:5,
    }
})