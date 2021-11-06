import React from 'react';
import { View, TextInput } from 'react-native';
import { Button } from '../Button';
import { styles } from './style';

export function Header() {

    return (
        <View style={styles.container}>
            <TextInput placeholder="Digite um nome para pesquisa" style={styles.input} 
                placeholderTextColor="#CCC"
            />
            <Button 
                color="#FFF"
                backgroundColor="transparent"
                title="BUSCAR"
                icon="search1"
            />
        </View>
    );
}