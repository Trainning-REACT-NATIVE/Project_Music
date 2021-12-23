import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const uNavigation = useNavigation();
  const image = { uri: "http://fhdwallpapers.weebly.com/uploads/4/3/8/1/43815373/fhdwallpapers-weebly-com-137-status-bar_orig.jpg" };
  const onFPassWord = () => {
    uNavigation.navigate('FPassWithEmail')
  };
  const [securePassword, setSecurePassword] = useState(true);
  const onChangeSecure = () => {
    setSecurePassword(securePassword ? false : true);
  }
  const SignUp = () => {
    uNavigation.navigate('SignUp')
  };
  /**/
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
      <TouchableOpacity onPress={() => uNavigation.goBack()}><Feather name="arrow-left" size={28} style={styles.icon} /></TouchableOpacity>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/—Pngtree—note_18885.png')}
      />
      <View style={styles.textIp2}>
        <Feather name="mail" size={25} color="#EDEDED" style={{ marginLeft: 5, }} />
        <TextInput keyboardType={'email-address'} style={{ marginLeft: 5, }} placeholder={"UserName"} placeholderTextColor={'#9B9B9B'} onChangeText={null} ></TextInput>
      </View>
      <View style={styles.textIp2}>
        <Feather name="lock" size={25} color="#EDEDED" style={{ marginLeft: 5, }} />
        <TextInput secureTextEntry={securePassword} placeholder={"PassWord"} placeholderTextColor={'#9B9B9B'} onChangeText={null} style={{ width: 185, marginLeft: 5, }}></TextInput>
        <TouchableOpacity onPress={onChangeSecure}><Feather name="eye" size={25} color="#EDEDED" /></TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'space-between', alignItems: 'center', flex: 1, marginBottom: 15,}}>
        <TouchableOpacity onPress={onFPassWord}><Text style={{ color: '#278EA5', paddingLeft: 100, fontStyle: 'italic', fontSize: 14, }}>Forgot PassWord?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={null}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 23, }}  >LOGIN</Text></TouchableOpacity>
        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
          <Text style={{ color: '#EDEDED', fontWeight: 'bold' }}>Don’t have an account?</Text>
          <TouchableOpacity onPress={SignUp}>
            <Text style={{ color: '#278EA5', fontWeight: 'bold' }}> SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    backgroundColor: '#171717',
  },
  tinyLogo: {
    width: 300,
    height: 150,
    marginBottom: 30,
  },
  textIp2: {
    borderRadius: 20,
    width: 270,
    height: 50,
    padding: 5,
    marginBottom: 15,
    backgroundColor: '#444444',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 40,
    width: 200,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#278EA5',
  },
  icon: {
    paddingTop: 30,
    paddingBottom: 0,
    paddingRight: 280,
    color: '#FFFFFF',
  },
});
