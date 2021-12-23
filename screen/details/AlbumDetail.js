import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView,StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import TaskbarItem from '../items/TaskbarItem';

export default function Playlist() {
    const uNavigation = useNavigation();
    const onListMusic = () => {
        uNavigation.navigate('ListMusic')
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
            <ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20, justifyContent: 'center' }}>
                    <Image style={styles.imagePlaylist} source={require('../../assets/wiz-khalifa-see-you-again-vid-billboard-1548_kzhw.jpg')} />
                    <View style={{ alignSelf: 'center' }}>
                        <View><Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 16 }}>See You Again</Text></View>
                        <View><Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 10, marginBottom: 3 }}>Wiz Khalifa</Text></View>
                        <View><Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 10, }}>123,456,789 listener</Text></View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                    <TouchableOpacity style={{ flexDirection: 'row', width: 160, height: 50, backgroundColor: '#278EA5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                        <Feather style={{ color: 'rgba(255, 255, 255, 1)', marginRight: 3, }} name="play" size={18} />
                        <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 14 }}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', width: 160, height: 50, backgroundColor: '#171717', justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderWidth: 2, borderColor: '#FFFFFF', }}>
                        <Feather style={{ color: 'rgba(255, 255, 255, 1)', marginRight: 3, }} name="file-text" size={18} />
                        <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 14, fontStyle: 'normal', }}>Lyrics</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 16, marginLeft: 15, marginBottom: 10, marginTop: 10, }}>Popular Song: </Text>
                    </View>
                    <View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.song}>
                            <View>
                                <View><Text style={{ color: 'white', fontSize: 12, }}>See You Again</Text></View>
                                <View><Text style={{ color: 'white', fontSize: 10, color: 'rgba(255, 255, 255, 0.5)' }}>Wiz Khalifa</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <TouchableOpacity><Feather name="plus-circle" size={20} style={{ color: '#EDEDED', marginRight: 20, }} /></TouchableOpacity>
                                <TouchableOpacity><Feather name="more-vertical" size={20} style={{ color: '#EDEDED', }} /></TouchableOpacity>
                            </View>
                        </View>
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
    top: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagePlaylist: {
        width: 160,
        height: 110,
        borderRadius: 15,
        marginRight: 20,
    },
    song: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
    },
});
