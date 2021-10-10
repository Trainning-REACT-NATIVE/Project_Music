import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('screen');
export default slideitem = ({item}) => {
    return(
        <View style={{marginHorizontal: 40,marginTop: 10,marginBottom:10,}}>
            <Image source={item.src} style={styles.image}/>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: width-80, 
        height: 150,
        borderRadius: 30,
    }
})