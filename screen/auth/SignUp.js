import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const uNavigation = useNavigation();
  const image = { uri: "http://fhdwallpapers.weebly.com/uploads/4/3/8/1/43815373/fhdwallpapers-weebly-com-137-status-bar_orig.jpg" };
  const [securePassword, setSecurePassword] = useState(true);
  const onChangeSecure = () => {
    setSecurePassword(securePassword ? false : true);
  };
  const [secureRePassword, setReSecurePassword] = useState(true);
  const onChangeSecureRe = () => {
    setReSecurePassword(secureRePassword ? false : true);
  }

  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
      <ScrollView  style={{flex: 1, paddingBottom: 0,}} width='100%' keyboardShouldPersistTaps={'handled'} >
            <KeyboardAvoidingView behavior={"padding"} style={{flex: 1}} enabled>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => uNavigation.goBack()}><Feather name="corner-up-left" size={32} style={styles.icon} /></TouchableOpacity>
        <StatusBar style="auto" />
        <Image
          style={styles.tinyLogo}
          source={require('../../image/Register.png')}
        />
        <TextInput style={[styles.textIp]} onChangeText={null} placeholder={"UserName"} />
        <View style={styles.textIp2}>
          <TextInput secureTextEntry={securePassword} placeholder={"PassWord"} onChangeText={null} style={{ width: 205 }}></TextInput>
          <TouchableOpacity onPress={onChangeSecure}><Feather name="eye" size={25} color="black" /></TouchableOpacity>
        </View>
        <View style={styles.textIp2}>
          <TextInput secureTextEntry={secureRePassword} placeholder={"Re-enter Password"} onChangeText={null} style={{ width: 205 }}></TextInput>
          <TouchableOpacity onPress={onChangeSecureRe}><Feather name="eye" size={25} color="black" /></TouchableOpacity>
        </View>
        <TextInput keyboardType={'number-pad'} style={[styles.textIp]} onChangeText={null} placeholder={"Phone"} />
        <TextInput keyboardType={'email-address'} style={[styles.textIp]} onChangeText={null} placeholder={"Email"} />
        <TouchableOpacity style={[styles.button,]} onPress={null}>
          <Text style={{ color: 'white', }}>Register</Text>
        </TouchableOpacity>
      </View>
          </KeyboardAvoidingView>
          </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
  },
  bgimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  textIp: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    width: 250,
    padding: 5,
    marginBottom: 10,
    backgroundColor: (0, 0, 25),
  },
  textIp2: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    width: 250,
    padding: 5,
    marginBottom: 10,
    backgroundColor: (0, 0, 25),
    flexDirection: 'row',
  },
  button: {
    borderRadius: 200,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 20,
  },
  icon: {
    paddingTop: 60,
    paddingBottom: 0,
    paddingRight: 280,
  },
});
