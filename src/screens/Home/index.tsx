import { View } from 'react-native';
import React, { useContext } from 'react';
import { Header, Profile, NoSearch } from '../../components';
import { styles } from './styles';
import { GithubContext } from '../../Context/github';


export function Home() {
    const { githubState } = useContext(GithubContext);

    return (
        <View style={styles.container}>
            <Header />
            
            { githubState.hasUser ? <Profile /> : <NoSearch /> }
        </View>
    );
}