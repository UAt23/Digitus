import React, { createContext, useContext, useEffect, useState } from 'react';
import { PostModel } from '../api/models/PostModel';
import ApiLayer from '../api/ApiLayer';

interface AppContextType {
    posts: PostModel[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error(
            'useAppContext must be used within an AppContextProvider',
        );
    }
    return context;
};

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await ApiLayer.getPosts();
                console.log(response.data)
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const contextValue: AppContextType = {
        posts,
    };
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
