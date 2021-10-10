import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function SignIn() {
  const image = { uri: "http://fhdwallpapers.weebly.com/uploads/4/3/8/1/43815373/fhdwallpapers-weebly-com-137-status-bar_orig.jpg" };
  return (
    <ImageBackground source={image} style={styles.bgimage}>
      <View style={styles.container}>
      <TouchableOpacity><Ionicons name="md-checkmark-circle" size={32} color="green" style={styles.icon}/></TouchableOpacity>
      <StatusBar style="auto" />
      <Image
            style={styles.tinyLogo}
            source={require('../../image/image-security.png')}
          />
          <Text style={styles.text}>Forgot PassWord With Email:</Text>
          <TextInput keyboardType={'email-address'} style={styles.textIp} placeholder={"Email"} onChangeText={onChangeEmail} ></TextInput>
          <TouchableOpacity style={styles.button} onPress={click}><Text style={{color:'white'}} >Sent</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems:'center',
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
  icon: {
    paddingTop: 60,
    paddingBottom: 10,
    paddingRight: 280,
  },
  text: {
    marginLeft: 50,
    fontSize: 25,
    marginBottom: 30,
  },
  textIp: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    width: 250,
    padding: 5,
    marginBottom: 15,
    backgroundColor: (0,0,25),
  },
  button: {
    borderRadius: 200,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 140,
    marginLeft: 180,
  },
});
