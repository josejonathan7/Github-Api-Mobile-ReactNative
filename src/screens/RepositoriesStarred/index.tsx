import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import { useNavigate } from 'react-router-dom';
import { UserPhoto, Button, RepositoriesStarredList } from '../../components';
import { GithubContext } from "../../Context/github";
import { styles } from './styles';

type Props = {
    type: "repositories" | "starred";
}

export function RepositoriesStarred({type} : Props) {
    const navigate = useNavigate();
    const { githubState } = useContext(GithubContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Button 
                    backgroundColor="transparent"
                    color="#FFF"
                    title="VOLTAR"
                    icon="left"
                    onPress={() => navigate('/')}
                />
                <UserPhoto 
                    imageUri={githubState.user.avatar_url}
                    sizes="SMALL"
                />
            </View>

            <ScrollView  style={styles.repositoriesList} 
                keyboardShouldPersistTaps="never"
                contentContainerStyle={styles.content}
            >
                <RepositoriesStarredList render={type}  />
            </ScrollView >
        </View>
    );
}