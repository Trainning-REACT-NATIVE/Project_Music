import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, ScrollView, ImageBackgroundBase, FlatList, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

import AlbumItem from '../items/AlbumItem';
import SongListItem from '../items/SongListItem';
import TaskbarItem from '../items/TaskbarItem';

import dataAlbum from '../Data/dataAlbum';
import dataListSong from '../Data/dataListSong';

export default function Profile() {
    const uNavigation = useNavigation();

    const onListMusic = () => {
        uNavigation.navigate('ListMusic')
    };

    const Search = () => {
        uNavigation.navigate('Search')
    };

    const Album = () => {
        uNavigation.navigate('Album')
    }
    const renderItemAlbum = ({ item }) => <AlbumItem item={item} onPress={Album} />
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
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10, }}>Profile</Text>
                </View>

                <TouchableOpacity onPress={Search}><Feather name="search" size={28} style={{ color: '#EDEDED', marginRight: 15, }} /></TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 5, }}>
                    <Image source={require('../assets/slide1.png')} style={{ width: 150, height: 150, borderRadius: 300, marginRight: 10, borderColor: '#ffffff', borderWidth: 3, }} />
                    <View style={{ justifyContent: 'center', marginLeft: 5, }}>
                        <Text style={{ color: '#FFFFFF', marginBottom: 15, fontSize: 16, }} >John Doe</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', width: 120, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 30, }}>
                            <Feather name='edit' size={20} style={{ marginRight: 3, }} />
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 15, }}>
                    <View>
                        <Text style={{ color: '#FFFFFF', marginLeft: 10, fontWeight: 'bold' }}>Albums</Text>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.6)', alignSelf: 'center' }}>15</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#FFFFFF', marginLeft: 10, fontWeight: 'bold' }}>Favorites</Text>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.6)', alignSelf: 'center' }}>100</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#FFFFFF', marginLeft: 10, fontWeight: 'bold' }}>Following</Text>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.6)', alignSelf: 'center' }}>30</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 10, }}>
                    <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between', marginRight: 20, marginLeft: 10, }}>
                        <Text style={{ color: '#ffffff', fontSize: 16 }}>My Albums</Text>
                        <TouchableOpacity><Feather name={'plus'} size={28} style={{ color: '#ffffff' }} /></TouchableOpacity>
                    </View>
                    <FlatList
                        data={dataAlbum}
                        keyExtractor={item => item.id}
                        horizontal
                        renderItem={renderItemAlbum}
                    />
                </View>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', height:1,width: width-50,alignSelf: 'center',marginTop: 15,marginBottom: 15,}}></View>
                <View>
                    <Text style={{ color: '#ffffff', fontSize: 16, marginLeft: 20, marginBottom:15, }}>Recent Songs</Text>
                    <FlatList
                        data={dataListSong}
                        keyExtractor={item => item.id}
                        renderItem={renderItemListSong}
                    />
                </View>
            </ScrollView>
           <TaskbarItem/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#171717',
        marginTop: 35,
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