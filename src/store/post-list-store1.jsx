//create context API

import { createContext, useReducer } from "react";

export const PostList =createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
})

const PostListProvider=({children})=>{
const [PostList, dispatchPostList]=useReducer(postListReducer,[],()=>{
     
    const addPost=()=>{};
    const deletePost=()=>{};
})

return (
    <PostList.Provider value={{postList,addPost,deletePost}}>
        {children}
    </PostList.Provider>
);

};