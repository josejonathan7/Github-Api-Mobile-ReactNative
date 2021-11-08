import React, { useContext, useEffect, useState } from "react";
import { View, Text, Linking, Button } from "react-native";
import { Link } from 'react-router-native';
import { GithubContext } from "../../Context/github";
import { styles } from "./styles";

type RepositoriesStarred ={
    id: string;
    name: string;
    full_name: string;
    html_url: string;
}

type Props = {
    render: 'repositories' | 'starred';
}

export function RepositoriesStarredList({ render }: Props) {
    const { githubState, getUserRepos, getUserStarred } = useContext(GithubContext);
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
          getUserRepos(githubState.user.login);
          getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(!!githubState.repositories);
    }, [githubState.user.login]);

    const renderRepos = (item: RepositoriesStarred) => {
        return (
            <View style={styles.container} key={ item.id }>
                <View style={styles.userNameContainer}>
                    <Text style={[styles.text, {color:"#FFF",  marginLeft: 0}]}  >Name:</Text>
                    <Text style={[styles.text,{color:"#FFF", flexShrink: 1}]}  >{ item.name }</Text>
                </View>
                <View style={styles.userFullName} >
                    <Text  style={{color:"#FFF"}} >FullName: </Text>
                    <Text 
                        children={item.full_name} 
                        onPress={ ()=>{ Linking.openURL(item.html_url)}}
                        style={styles.text}
                    />
                </View>
            </View>
        );
    }

    const renderStarred = (item: RepositoriesStarred) => {
        return (
            <View style={styles.container} key={ item.id }>
                <View style={styles.userNameContainer}>
                    <Text style={[styles.text, {color:"#FFF",  marginLeft: 0}]}  >Name:</Text>
                    <Text style={[styles.text,{color:"#FFF", flexShrink: 1}]}  >{ item.name }</Text>
                </View>
                <View style={styles.userFullName} >
                    <Text  style={{color:"#FFF"}} >FullName: </Text>
                    <Text 
                        children={item.full_name} 
                        onPress={ ()=>{ Linking.openURL(item.html_url)}}
                        style={styles.text}
                    />
                </View>
            </View>
        );
    }

    return (
        <>
            { hasUserForSearchrepos ? 
                <>
                    {
                        render === 'repositories' ? githubState.repositories.map(renderRepos) : githubState.starred.map(renderStarred) 
                    }
                </>
                : <Text></Text>
            }
        </>
    );
}