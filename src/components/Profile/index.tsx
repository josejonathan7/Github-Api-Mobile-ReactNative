import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { UserPhoto, Button } from '../';
import { styles } from './style';
import { GithubContext } from './../../Context/github';

export function Profile() {
    const navigate = useNavigate();
    const { githubState } = useContext(GithubContext);

    return (
        <View style={styles.container}>
            <UserPhoto imageUri={ githubState.user.avatar_url } />
            <Text style={styles.title} >{ githubState.user.name } </Text>

            <View style={styles.userInfoContainer} >
                <Text style={[styles.userInfo]} >Nome de Usuário:</Text>
                <Text style={styles.userInfo} > { githubState.user.login } </Text>
            </View>

            <View style={styles.userInfoContainer} >
                <Text style={[styles.userInfo]} >Local:</Text>
                <Text style={styles.userInfo} > { githubState.user.location ? githubState.user.location : "Não definido" } </Text>
            </View>

            <View style={styles.userInfoContainer} >
                <Text style={[styles.userInfo]} >Compania:</Text>
                <Text style={styles.userInfo} > { githubState.user.company ? githubState.user.company : "Não definido" } </Text>
            </View>

            <View style={styles.userInfoContainer} >
                <Text style={[styles.userInfo]} >Blog:</Text>
                <Text style={styles.userInfo} >{ githubState.user.blog ? githubState.user.blog : "Não definido" } </Text>
            </View>


            <View style={styles.userStatisticsContainer}>
                <View style={styles.userStatisticsView}>
                    <Text style={styles.userStatistics} >Followers:</Text>
                    <Text style={styles.userStatistics} > { githubState.user.followers } </Text>
                </View>

                <View style={styles.userStatisticsView}>
                    <Text style={styles.userStatistics} >Gists:</Text>
                    <Text style={styles.userStatistics} > { githubState.user.public_gists } </Text>
                </View>

                <View style={styles.userStatisticsView}>
                    <Text style={styles.userStatistics} >Following:</Text>
                    <Text style={styles.userStatistics} > { githubState.user.following } </Text>
                </View>

                <View style={styles.userStatisticsView}>
                    <Text style={styles.userStatistics} >Repositories:</Text>
                    <Text style={styles.userStatistics} > { githubState.user.public_repos } </Text>
                </View>

            </View>

            <View style={styles.buttonGroup}>
                <Button
                    title="Repositórios"
                    color="#CCC"
                    backgroundColor="transparent"
                    icon="rocket1"
                    onPress={() => navigate('/repositories')}
                />

                <Button
                    title="Estrelados"
                    color="#CCC"
                    backgroundColor="transparent"
                    icon="star"
                />
            </View>
        </View>
    );
}