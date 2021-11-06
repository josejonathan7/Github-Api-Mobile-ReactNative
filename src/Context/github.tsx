import React, { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

type User ={
        login: string,
        name: string,
        html_url: string,
        blog: string,
        company: string,
        location: string,
        followers: number,
        following: number,
        public_gists: number,
        public_repos: number,
        avatar_url: string;
}

type GitDataType ={
    hasUser: boolean;
    loading: boolean;
    user: User;
    repositories: [];
    starred: [];
}

type ContextType ={
    githubState: GitDataType;
    getUser: (userName: string) => any; 
    getUserRepos: (userName: string) => any; 
    getUserStarred: (userName: string) => any; 
}

export const GithubContext = createContext({} as ContextType);

const GithubProvider = ({children}: any) => {
    const [ githubState, setGithubState] = useState<GitDataType>({
        hasUser: false,
        loading: false,
        user: {
            login: '',
            name: '',
            html_url: '',
            blog: '',
            company: '',
            location: '',
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
            avatar_url: ''
        },
        repositories: [],
        starred: []
    });

    const getUser = (userName: string) => {
        setGithubState(prevState => ({
            ...prevState,
            loading: !prevState.loading
        }));

        api.get<User>(`users/${userName}`).then(({data}) => {
            setGithubState(prevState => ({
                ...prevState,
                hasUser: true,
                user: {
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                    avatar_url: data.avatar_url
                }
            }));

        }).finally(() => {
            setGithubState(prevState => ({
                ...prevState,
                loading: !prevState.loading
            }));
        });
    }
   
    const getUserRepos =  (userName: string) => {
        api.get(`users/${userName}/repos`).then(({data}) => {
           setGithubState(prevState => ({
               ...prevState,
               repositories: data
           }));
        });
    }

    const getUserStarred = (userName: string) => {
        api.get(`users/${userName}/starred`).then(({data}) => {
           setGithubState(prevState => ({
               ...prevState,
               starred: data
           }))
        });
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username: string) => getUser(username), []),
        getUserRepos: useCallback((username: string) => getUserRepos(username), []),
        getUserStarred: useCallback((username: string) => getUserStarred(username), []),
    };


    return (
        <GithubContext.Provider value={contextValue} >{children}</GithubContext.Provider>
    );
}

function useAuth(){
    const context = useContext(GithubContext);

    return context;
}

export { useAuth, GithubProvider }