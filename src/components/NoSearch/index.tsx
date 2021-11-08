import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

export function NoSearch() {

    return(
        <View style={styles.container}>
            <AntDesign name="github" size={80} color="#FFF" />
            <Text style={styles.message} >Pesquise o nome de um usuário!</Text>
        </View>
    );
}