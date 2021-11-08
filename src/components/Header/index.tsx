import React, { useContext, useState } from 'react';
import { View, TextInput } from 'react-native';
import { GithubContext } from '../../Context/github';
import { Button } from '../Button';
import { styles } from './style';

export function Header() {
    const { getUser } = useContext(GithubContext);
    const [ userNameForSearch, setUserNameForSearch] = useState("");

    const submitGetUser = () => {
        if(!userNameForSearch) return;
        return getUser(userNameForSearch);
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Digite um nome para pesquisa" style={styles.input} 
                placeholderTextColor="#CCC"
                onChangeText={setUserNameForSearch}
                keyboardAppearance="dark"
            />
            <Button 
                color="#FFF"
                backgroundColor="transparent"
                title="BUSCAR"
                icon="search1"
                onPress={submitGetUser}
            />
        </View>
    );
}