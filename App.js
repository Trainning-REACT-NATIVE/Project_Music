import React, { useEffect, useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Root from "./navigator";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

/*export default function App() {
    return (
        <Root />
    );
}*/
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Root onLayout={onLayoutRootView} />
  );
}
