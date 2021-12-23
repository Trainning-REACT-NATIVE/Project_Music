import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, StatusBar,FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import TaskbarItem from '../items/TaskbarItem';
import NameItem from '../items/Name';

import dataName from '../Data/dataName';

export default function LM() {
    const uNavigation = useNavigation();
    const onListMusic = () => {
        uNavigation.navigate('ListMusic')
    };

    /**/
    const renderName = ({ item }) => <NameItem item={item}/>
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <View style={styles.top}>
                <TouchableOpacity onPress={() => uNavigation.goBack()}><Feather name="arrow-left" size={28} style={styles.icon1} /></TouchableOpacity>
                <TouchableOpacity><Feather name="align-right" size={28} style={styles.icon2} /></TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20, justifyContent: 'center' }}>
                    <Image style={styles.imagePlaylist} source={require('../../assets/singer.jpg')} />
                    <View style={{ alignSelf: 'center' }}>
                        <View><Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 16 }}>Wiz Khalifa</Text></View>
                        <View><Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 10, marginBottom: 3 }}>123k follower</Text></View>
                        <View><Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 10, }}>123,456,789 listener</Text></View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                    <TouchableOpacity style={{ flexDirection: 'row', width: 160, height: 50, backgroundColor: '#278EA5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                        <Feather style={{ color: 'rgba(255, 255, 255, 1)', marginRight: 3, }} name="play" size={18} />
                        <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 14 }}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', width: 160, height: 50, backgroundColor: '#171717', justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderWidth: 2, borderColor: '#FFFFFF', }}>
                        <Feather style={{ color: 'rgba(255, 255, 255, 1)', marginRight: 3, }} name="plus" size={18} />
                        <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 14, fontStyle: 'normal', }}>Follow</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 16, marginLeft: 15, marginBottom: 10, marginTop: 10, }}>Featured song: </Text>
                    </View>
                    <View>
                    <FlatList
                        data={dataName}
                        keyExtractor={item => item.id}
                        renderItem={renderName}
                    />
                    </View>
                </View>
            </ScrollView>
            <TaskbarItem />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#171717',
    },
    icon1: {
        color: '#EDEDED',
        marginLeft: 30,
    },
    icon2: {
        color: '#EDEDED',
        marginRight: 30,
    },
    imagePlaylist: {
        width: 160,
        height: 160,
        borderRadius: 100,
        marginRight: 20,
    },
    top: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },    
});
