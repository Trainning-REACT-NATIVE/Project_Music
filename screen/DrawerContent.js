import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function DrawerContent(props, navigation) {
    const uNavigation = useNavigation();
    return (
        <View>
            <TouchableOpacity> 
                <Feather name={'arrow-left'} size={26} style={{ color: '#ffffff', marginRight: '5%',alignSelf:'flex-end' }}/>
            </TouchableOpacity>
            <View>
                <View style={{ flexDirection: 'row', marginTop: '5%', marginBottom: '5%' }}>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '500', marginRight: '5%',marginTop:'8%' }}>John Doe</Text>
                    <Image source={require('../screen/assets/images.png')} style={{ width: 90, height: 90, borderRadius: 20, }} /> 
                </View>
                <View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#9B9B9B', marginTop: '5%', }}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>
                        <Feather name={'user'} size={28} style={{ color: '#ffffff', marginRight: '5%', }} />
                        <Text style={{ color: '#ffffff', alignSelf: 'center', fontSize: 16, }}>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#9B9B9B', marginTop: '5%', }}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>
                        <Feather name={'bell'} size={28} style={{ color: '#ffffff', marginRight: '5%', }} />
                        <Text style={{ color: '#ffffff', alignSelf: 'center', fontSize: 16, }}>Notification</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#9B9B9B', marginTop: '5%', }}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>
                        <Feather name={'music'} size={28} style={{ color: '#ffffff', marginRight: '5%', }} />
                        <Text style={{ color: '#ffffff', alignSelf: 'center', fontSize: 16, }}>My Music</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#9B9B9B', marginTop: '5%', }}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>
                        <Feather name={'book'} size={28} style={{ color: '#ffffff', marginRight: '5%', }} />
                        <Text style={{ color: '#ffffff', alignSelf: 'center', fontSize: 16, }}>My Album</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={{ alignSelf: 'flex-end',flexDirection: 'row',marginTop:310,}}>
                <Text style={{color:'#ffffff'}}>Log Out</Text>
                <Feather name={'log-out'} size={28} style={{ color: '#ffffff', marginLeft: '5%', }} />    
            </TouchableOpacity>
        </View>
    );
}