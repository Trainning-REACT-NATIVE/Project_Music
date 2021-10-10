import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('screen');
export default AlbumItem = ({item, onPress}) => {
    return(
        <TouchableOpacity onPress={()=>onPress(item.id)}>
            <Image source={item.src} style={styles.imageAlbum}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    imageAlbum: {
        width: 120,
        height: 120,
        borderRadius: 20,
        marginRight: 10,
    }
})