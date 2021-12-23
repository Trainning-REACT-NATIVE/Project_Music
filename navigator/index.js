import * as React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpAuth from "../screen/auth/SignUp";
import SignInAuth from "../screen/auth/SignIn";
import ListMusic from "../screen/Home/ListMusic";
import Song from "../screen/details/SongDetail";
import Album from "../screen/details/AlbumDetail";
import Singer from "../screen/details/SingerDetail";
import Search from "../screen/Home/Search";
import DrawerScreen from "../navigator/drawer";
import HomeN from "../screen/Home/HomeN";

const Stack= createStackNavigator();
export default function Root(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
                }}
                initialRouteName="HomeN">
                <Stack.Screen name={"DrawerScreen"} component={DrawerScreen}/>
                <Stack.Screen name={"SignUp"} component={SignUpAuth}/>
                <Stack.Screen name={"SignIn"} component={SignInAuth}/>
                <Stack.Screen name={"ListMusic"} component={ListMusic}/>
                <Stack.Screen name={"Song"} component={Song}/>
                <Stack.Screen name={"Album"} component={Album}/>
                <Stack.Screen name={"Singer"} component={Singer}/>
                <Stack.Screen name={"Search"} component={Search}/>
                <Stack.Screen name={"HomeN"} component={HomeN}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
