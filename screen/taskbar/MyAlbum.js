import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, FlatList,Dimensions, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

import ListAlbumItem from '../items/AlbumListItem';

import dataListAlbum from '../Data/dataListAlbum';
import TaskbarItem from '../items/TaskbarItem';

export default function Home() {
    const uNavigation = useNavigation();

    const Search = () => {
        uNavigation.navigate('Search')
    }

    const renderItemListAlbum = ({ item }) => <ListAlbumItem item={item} />

    return (
        <View style={styles.container}>
            <StatusBar
                style="auto"
            />
            <View style={styles.top}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity><Feather name='align-left' size={28} style={{ color: '#ffffff', marginLeft: 15, }} /></TouchableOpacity>
                    <View style={{ width: 1, height: 25, backgroundColor: 'white', marginLeft: 10, }}></View>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10,fontWeight:'bold',fontWeight:'500' }}>My Album</Text>
                </View>

                <TouchableOpacity onPress={Search}><Feather name="search" size={28} style={{ color: '#EDEDED', marginRight: 15, }} /></TouchableOpacity>
            </View>
            <ScrollView >
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:20,marginRight:20,marginBottom:10,}}>
                    <Text style={{color: '#FFFFFF',fontSize:16,}}>Album List</Text>
                    <Feather name={'plus'} style={{color: '#FFFFFF'}} size={24} />
                </View>
                <SafeAreaView>
                    <FlatList 
                        keyExtractor={item=>item.id}
                        data={dataListAlbum}
                        renderItem={renderItemListAlbum}
                    />
                </SafeAreaView>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', height:1,width: width-50,alignSelf: 'center',marginTop: 30,marginBottom:30}}></View>
                <Text style={{color: '#FFFFFF',fontSize:16,marginLeft:20,marginBottom:10,fontWeight:'500'}}>Popular Album</Text>
                <SafeAreaView>
                    <FlatList 
                        keyExtractor={item=>item.id}
                        data={dataListAlbum}
                        renderItem={renderItemListAlbum}
                    />
                </SafeAreaView>
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