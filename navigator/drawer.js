import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home';
import Profile from '../screen/taskbar/Profile';
import MyMusic from '../screen/taskbar/MyMusic';
import MyAlbum from '../screen/taskbar/MyAlbum';

import { DrawerContent } from '../screen/DrawerContent';

const Drawer = createDrawerNavigator();
  export default () => {
    return (
        <Drawer.Navigator 
          drawerContent={props => <DrawerContent {...props} />} 
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              width: '65%',
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#313131',
              padding: 15,
            }
          }} 
        >
          <Drawer.Screen name="Home" component={Home} options={{drawerLabel: 'Home'}} />
          <Drawer.Screen name="Profile" component={Profile} options={{drawerLabel: 'Profile'}} />
          <Drawer.Screen name="MyMusic" component={MyMusic} options={{drawerLabel: 'MyMusic'}} />
          <Drawer.Screen name="MyAlbum" component={MyAlbum} options={{drawerLabel: 'MyAlbum'}} />
        </Drawer.Navigator>
    );
}