import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
const { width } = Dimensions.get('screen');
export default Name = ({item}) => {
    return (
        <View style={styles.song}>
            <View>
                <View><Text style={{ color: 'white', fontSize: 12, }}>{item.nameSong}</Text></View>
                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>{item.nameSinger}</Text></View>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    song: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
    },
})