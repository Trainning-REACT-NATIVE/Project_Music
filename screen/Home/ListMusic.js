import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, ScrollView, ImageBackgroundBase,StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

export default function LM() {
  const uNavigation = useNavigation();

  const onSignIn = () => {
    uNavigation.navigate('SignIn')
  };
  const onSignUp = () => {
    uNavigation.navigate('SignUp')
  };
  /**/
  return (
    <View style={styles.container}>
       <StatusBar
        barStyle="light-content"
      />
      <View style={styles.top}>
        <TouchableOpacity onPress={() => uNavigation.goBack()}><Feather name="arrow-left" size={28} style={styles.icon1} /></TouchableOpacity>
        <TouchableOpacity><Feather name="list" size={28} style={styles.icon2} /></TouchableOpacity>
      </View>
      <View style={{width: '100%'}}><Image source={require('../../assets/download.jpg')} style={{ alignSelf: 'center', borderRadius: 300, marginBottom: 160, marginTop: 40, }} /></View>
      <View style={{ marginLeft: 30 }}>
        <View><Text style={{ color: 'white', fontSize: 16, }}>See You Again</Text></View>
        <View><Text style={{ color: 'white', fontSize: 14, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
      </View>
      <View style={{ marginTop: 20, }}>
        <View style={{ height: 1, width: 320, backgroundColor: 'rgba(255, 255, 255, 0.3)', alignSelf: 'center', marginBottom: 5, }}></View>
        <View style={{ justifyContent: 'space-between', width: 300, flexDirection: 'row', alignSelf: 'center', color: '#EDEDED', marginTop: 5, }}>
          <Text style={{ color: '#EDEDED' }}>00:00</Text>
          <Text style={{ color: '#EDEDED' }}>03:58</Text>
        </View>
      </View>
      <View style={styles.iconMS}>
        <TouchableOpacity><Feather name={'repeat'} style={{ color: '#EDEDED', fontSize: 30, }} /></TouchableOpacity>
        <TouchableOpacity><Feather name={'skip-back'} style={{ color: '#EDEDED', fontSize: 30, }} /></TouchableOpacity>
        <TouchableOpacity><Feather name={'pause'} style={{ color: '#EDEDED', fontSize: 30, }} /></TouchableOpacity>
        <TouchableOpacity><Feather name={'skip-forward'} style={{ color: '#EDEDED', fontSize: 30, }} /></TouchableOpacity>
        <TouchableOpacity><Feather name={'shuffle'} style={{ color: '#EDEDED', fontSize: 30, }} /></TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#171717',
  },
  iconMS: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 35,
  },
  icon1: {
    marginTop: 30,
    color: '#EDEDED',
    marginLeft: 30,
  },
  icon2: {
    marginTop: 30,
    color: '#EDEDED',
    marginRight: 30,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
