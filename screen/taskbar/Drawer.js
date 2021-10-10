import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../taskbar/MyMusic';
import Article from '../taskbar/MyAlbum';

const Drawer = createDrawerNavigator();
  export default () => {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Feed">
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}