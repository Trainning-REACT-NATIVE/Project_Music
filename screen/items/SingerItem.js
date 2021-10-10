import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('screen');
export default SongItem = ({item, onPress}) => {
    return(
        <TouchableOpacity onPress={()=>onPress(item.id)}>
            <Image style={styles.imageSinger} source={item.src} />
            <Text style={{ color: '#EDEDED', fontSize: 12, textAlign: 'center', width: 130, marginTop: 5 }}>{item.name}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    imageSinger: {
        width: 130,
        height: 130,
        borderRadius: 100,
        marginRight: 10,
    }
})