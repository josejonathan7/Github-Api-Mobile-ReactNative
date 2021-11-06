import React from 'react';
import { View, Text } from 'react-native';
import { UserPhoto } from '../';
import { Button } from '../Button';
import { styles } from './style';

export function Profile() {


    return (
        <>
            <UserPhoto imageUri="" />

            <View style={styles.container}>
                <Text style={styles.title} >José Jonathan Gomes</Text>

                <View style={styles.userInfoContainer} >
                    <Text style={[styles.userInfo]} >Nome de Usuário:</Text>
                    <Text style={styles.userInfo} >José Jonathan</Text>
                </View>

                <View style={styles.userInfoContainer} >
                    <Text style={[styles.userInfo]} >Local:</Text>
                    <Text style={styles.userInfo} >Brasil</Text>
                </View>

                <View style={styles.userInfoContainer} >
                    <Text style={[styles.userInfo]} >Compania:</Text>
                    <Text style={styles.userInfo} >a</Text>
                </View>

                <View style={styles.userInfoContainer} >
                    <Text style={[styles.userInfo]} >Blog:</Text>
                    <Text style={styles.userInfo} >inexistente</Text>
                </View>

                
            
                <View style={styles.userStatisticsContainer}>
                    <View style={styles.userStatisticsView}>
                        <Text style={styles.userStatistics} >Followers:</Text>
                        <Text style={styles.userStatistics} > 0</Text>
                    </View>

                    <View style={styles.userStatisticsView}>
                        <Text style={styles.userStatistics} >Gists:</Text>
                        <Text style={styles.userStatistics} > 0</Text>
                    </View>

                    <View style={styles.userStatisticsView}>
                        <Text style={styles.userStatistics} >Following:</Text>
                        <Text style={styles.userStatistics} > 0</Text>
                    </View>

                    <View style={styles.userStatisticsView}>
                        <Text style={styles.userStatistics} >Repositories:</Text>
                        <Text style={styles.userStatistics} > 0</Text>
                    </View>
                   
                </View>

               <View style={styles.buttonGroup}>
                <Button 
                        title="Repositórios"
                        color="#CCC"
                        backgroundColor="transparent"
                        icon="rocket1"
                    />

                <Button 
                        title="Estrelados"
                        color="#CCC"
                        backgroundColor="transparent"
                        icon="rocket1"
                    />
               </View>
            </View>
        </>
    );
}