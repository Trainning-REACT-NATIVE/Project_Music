import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('screen');

export default SongItem = ({item, onPress}) => {
    return(
        <TouchableOpacity onPress={()=>onPress(item.id)}>
            <Image source={item.src} style={styles.imageSong}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    imageSong: {
        width: 160,
        height: 100,
        borderRadius: 15,
        marginRight: 10,
        marginBottom: 15,
    }
})