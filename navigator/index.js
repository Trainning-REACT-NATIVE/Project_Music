import * as React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpAuth from "../screen/auth/SignUp";
import SignInAuth from "../screen/auth/SignIn";
import HomeAuth from "../screen/Home";
import FPassWithEmail from "../screen/auth/ForgotPassEmail";
import FPassWithPhone from "../screen/auth/ForgotPassPhone";
import ListMusic from "../screen/Home/ListMusic";
import Song from "../screen/details/SongDetail";
import Album from "../screen/details/AlbumDetail";
import Singer from "../screen/details/SingerDetail";
import Search from "../screen/Home/Search";
import Profile from "../screen/taskbar/Profile";
import MyMusic from "../screen/taskbar/MyMusic";
import MyAlbum from "../screen/taskbar/MyAlbum";

export default function Root(){
    const Stack= createStackNavigator();
    
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="MyMusic">
                <Stack.Screen name={"SignUp"} component={SignUpAuth}/>
                <Stack.Screen name={"Home"} component={HomeAuth}/>
                <Stack.Screen name={"SignIn"} component={SignInAuth}/>
                <Stack.Screen name={"FPassWithEmail"} component={FPassWithEmail}/>
                <Stack.Screen name={"FPassWithPhone"} component={FPassWithPhone}/>
                <Stack.Screen name={"ListMusic"} component={ListMusic}/>
                <Stack.Screen name={"Song"} component={Song}/>
                <Stack.Screen name={"Album"} component={Album}/>
                <Stack.Screen name={"Singer"} component={Singer}/>
                <Stack.Screen name={"Search"} component={Search}/>
                <Stack.Screen name={"Profile"} component={Profile}/> 
                <Stack.Screen name={"MyMusic"} component={MyMusic}/> 
                <Stack.Screen name={"MyAlbum"} component={MyAlbum}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
