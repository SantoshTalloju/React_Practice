import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostList = createContext({
    postList: [],
    addPost: () => {},
    addInitialPosts: () => {},
    deletePost: () => {}
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    switch (action.type) {
        case 'ADD_POST':
            return [action.payload.post, ...currentPostList];
        case 'DELETE_POST':
            return currentPostList.filter(post => post.id !== action.payload.postId);
        case 'ADD_INITIAL_POSTS':
            return [...currentPostList, ...action.payload.posts];
        default:
            return newPostList;
    }
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (post) => {
        dispatchPostList({ type: 'ADD_POST', payload: { post } });
    }

    const deletePost = (postId) => {
        dispatchPostList({ type: 'DELETE_POST', payload: { postId } });
    }

    const addInitialPosts = (posts) => {
        dispatchPostList({ type: 'ADD_INITIAL_POSTS', payload: { posts } });
    }

    return <PostList.Provider value={{
        postList,
        addPost, deletePost, addInitialPosts
    }}>
        {children}
    </PostList.Provider>
}

export default PostListProvider;
