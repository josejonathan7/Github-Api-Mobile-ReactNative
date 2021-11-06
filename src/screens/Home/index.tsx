import { View } from 'react-native';
import React from 'react';
import { Header, Profile } from '../../components';
import { styles } from './styles';


export function Home() {


    return (
        <View style={styles.container}>
            <Header />

            <Profile />
            
        </View>
    );
}