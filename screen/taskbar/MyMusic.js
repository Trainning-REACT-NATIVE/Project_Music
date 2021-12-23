import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, FlatList,Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

import SongListItem from '../items/SongListItem';

import dataListSong from '../Data/dataListSong';
import TaskbarItem from '../items/TaskbarItem';

export default function Home() {
    const uNavigation = useNavigation();

    const ListMusic = () => {
        uNavigation.navigate('ListMusic')
    };
    const Search = () => {
        uNavigation.navigate('Search')
    }

    const renderItemListSong = ({ item }) => <SongListItem item={item} />

    return (
        <View style={styles.container}>
            <StatusBar
                style="auto"
            />
            <View style={styles.top}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity><Feather name='align-left' size={28} style={{ color: '#ffffff', marginLeft: 15, }} /></TouchableOpacity>
                    <View style={{ width: 1, height: 25, backgroundColor: 'white', marginLeft: 10, }}></View>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10, }}>My Music</Text>
                </View>

                <TouchableOpacity onPress={Search}><Feather name="search" size={28} style={{ color: '#EDEDED', marginRight: 15, }} /></TouchableOpacity>
            </View>
            <View>
            <ScrollView>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', height:30, alignItems: 'center',marginTop:20,marginRight: 20,marginLeft:20,}}>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Feather name={'heart'} size={24} style={{color: '#ffffff', }} />
                        <Text style={{color: '#ffffff',marginLeft:10,fontSize: 14, }} >Collection</Text>
                    </View>
                    <Feather name={'chevron-right'} size={24} style={{color: '#ffffff', }} />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', height:30, alignItems: 'center',marginTop:20,marginRight: 20,marginLeft:20,}}>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Feather name={'download'} size={24} style={{color: '#ffffff', }} />
                        <Text style={{color: '#ffffff',marginLeft:10,fontSize: 14, }} >Download</Text>
                    </View>
                    <Feather name={'chevron-right'} size={24} style={{color: '#ffffff', }} />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', height:30, alignItems: 'center',marginTop:20,marginRight: 20,marginLeft:20,}}>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Feather name={'clock'} size={24} style={{color: '#ffffff', }} />
                        <Text style={{color: '#ffffff',marginLeft:10,fontSize: 14, }} >Recently Played</Text>
                    </View>
                    <Feather name={'chevron-right'} size={24} style={{color: '#ffffff', }} />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', height:30, alignItems: 'center',marginTop:20,marginRight: 20,marginLeft:20,}}>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Feather name={'user-plus'} size={24} style={{color: '#ffffff', }} />
                        <Text style={{color: '#ffffff',marginLeft:10,fontSize: 14, }} >Following</Text>
                    </View>
                    <Feather name={'chevron-right'} size={24} style={{color: '#ffffff', }} />
                </TouchableOpacity>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', height:1,width: width-50,alignSelf: 'center',marginTop: 30,marginBottom:30}}></View>
                <View>
                <FlatList
                    data={dataListSong}
                    keyExtractor={item => item.id}
                    pagingEnabled
                    renderItem={renderItemListSong}
                /></View>
            </ScrollView>
            </View>
            <TaskbarItem/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#171717',
    },
    top: {
        marginTop: 10,
        flexDirection: 'row',
        direction: 'ltr',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center',
    },

});