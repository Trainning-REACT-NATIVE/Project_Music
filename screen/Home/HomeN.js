import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, ScrollView, ImageBackgroundBase, FlatList,StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import SongItem from '../items/Songitem';
import AlbumItem from '../items/AlbumItem';
import SlideItem from '../items/slideitem';
import SingerItem from '../items/SingerItem';
import TaskbarItem from '../items/TaskbarItem';


import dataSong from '../Data/dataSong';
import dataAlbum from '../Data/dataAlbum';
import dataSlide from '../Data/dataslide';
import dataSinger from '../Data/dataSinger';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home({navigation}) {
  const uNavigation = useNavigation();

  const onSignIn = () => {
    uNavigation.navigate('SignIn')
  };
  const onListMusic = () => {
    uNavigation.navigate('ListMusic')
  };
  const Song = () => {
    uNavigation.navigate('Song')
  }
  const Search = () => {
    uNavigation.navigate('Search')
  }
  const Album = () => {
    uNavigation.navigate('Album')
  }
  const Singer = () => {
    uNavigation.navigate('Singer')
  }
  const renderItemAlbum = ({ item }) => <AlbumItem item={item} onPress={Album} />
  const renderItemSong = ({ item }) => <SongItem item={item} onPress={Song} />
  const renderSlideItem = ({ item }) => <SlideItem item={item}/>
  const renderSingerItem = ({ item }) => <SingerItem item={item} onPress={Singer} />

  /**/
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
        barStyle="light-content"
      />
      <View style={styles.top}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={onSignIn}><Text style={styles.texttop}>LOGIN</Text></TouchableOpacity>
          <View style={{ width: 1, height: 25, backgroundColor: 'white', marginLeft: 10, }}></View>
          <Text style={{ color: 'white', fontSize: 16, marginLeft: 10, }}>Home</Text>
        </View>
        <TouchableOpacity onPress={Search}><Feather name="search" size={28} style={{ color: '#EDEDED', marginRight: 15, }} /></TouchableOpacity>
      </View>
      <ScrollView>
        <View>
        <FlatList
                data={dataSlide}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                renderItem={renderSlideItem}
            />
        </View>
        <View>
          <TouchableOpacity style={styles.textAlbum}>
            <Text style={{ color: '#EDEDED', fontSize: 18, textAlign: 'center', paddingLeft: 10, }}>Album</Text>
            <Feather name="chevron-right" style={{ color: '#EDEDED', marginRight: 5, fontSize: 30, }} />
          </TouchableOpacity>
          <View style={{ paddingLeft: 10, }}>
            <FlatList
              data={dataAlbum}
              keyExtractor={item => item.id}
              horizontal
              renderItem={renderItemAlbum}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.textAlbum}>
            <Text style={{ color: '#EDEDED', fontSize: 18, textAlign: 'center', paddingLeft: 10, }}>Song</Text>
            <Feather name="chevron-right" style={{ color: '#EDEDED', marginRight: 5, fontSize: 30, }} />
          </TouchableOpacity>
          <View style={{ paddingLeft: 10, }}>
            <FlatList
              data={dataSong}
              keyExtractor={item => item.id}
              horizontal
              renderItem={renderItemSong}
            />
          </View>
        </View>
        <View >
          <TouchableOpacity style={styles.textAlbum}>
            <Text style={{ color: '#EDEDED', fontSize: 18, textAlign: 'center', paddingLeft: 10, fontStyle: 'normal' }}>Singer</Text>
            <Feather name="chevron-right" style={{ color: '#EDEDED', marginRight: 5, fontSize: 30, }} />
          </TouchableOpacity>
          <View style={{ paddingLeft: 10, }}>
          <FlatList
                data={dataSinger}
                keyExtractor={item => item.id}
                horizontal
                renderItem={renderSingerItem}
            />
          </View>
        </View>
      </ScrollView>
      <TaskbarItem/>
    </SafeAreaView>
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
  imagetop: {
    width: 220,
    height: 140,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 15,
  },
  textAlbum: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#232323',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  texttop: {
    color: '#EDEDED',
    fontSize: 10,
    borderRadius: 30,
    borderColor: '#EDEDED',
    borderWidth: 2,
    width: 100,
    padding: 5,
    textAlign: 'center',
    marginLeft: 10,
  },
});
