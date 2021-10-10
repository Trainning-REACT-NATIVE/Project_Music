import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, ScrollView, ImageBackgroundBase } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import TaskbarItem from '../items/TaskbarItem';

export default function Search() {
    const uNavigation = useNavigation();
    const LM = () => {
        uNavigation.navigate('LM')
      };
    /**/
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.top}>
                <TouchableOpacity onPress={() => uNavigation.goBack()}><Feather name="arrow-left" size={28} style={styles.icon1} /></TouchableOpacity>
            </View>
            <View style={styles.textIp2}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Feather name="mic" size={20} color="#FFFFFF" style={{marginLeft: 5,}} />
            <View style={{width: 1,height: 20,backgroundColor: '#FFFFFF',marginLeft: 5,}}></View>
            <TextInput keyboardType={'email-address'} style={{marginLeft: 5,}} placeholder={"Search"} placeholderTextColor={'#9B9B9B'} onChangeText={null} ></TextInput>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
        <View style={{width: 1,height: 20,backgroundColor: '#FFFFFF',}}></View>
        <Feather name="search" size={20} color="#FFFFFF" style={{marginLeft: 5,marginRight: 5,}} />
        </View>
        </View>
            <ScrollView>
                <View>
                    <Text style={{color: '#FFFFFF',fontWeight: 'bold',marginLeft: 12}}>Recent Search: </Text>
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
    icon1: {
        marginTop: 30,
        color: '#EDEDED',
        marginLeft: 30,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textIp2: {
        borderRadius: 20,
        width: 340,
        height: 34,
        padding: 5,
        marginBottom: 15,
        backgroundColor: '#444444',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent:'space-between',
        marginTop: 15,
      },
});
