import React from 'react';
import { Route, Routes, NativeRouter } from 'react-router-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { Home, Repositories } from './src/screens';
import { GithubProvider } from './src/Context/github';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <GithubProvider>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <NativeRouter>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/repositories" element={<Repositories/>} />
        </Routes>
      </NativeRouter>
    </GithubProvider>

  );
}
