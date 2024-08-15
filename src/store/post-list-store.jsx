// import { getDatabase,get,set,child,push,ref } from "firebase/database";
// import {app} from './firebase'
// import { useReducer,createContext } from "react";
// import firebase from "firebase/compat/app";


// const initial=[];
// const Context=createContext({
//     arr:initial,
//     add:()=>{},
//     del:()=>{}
// })

// function reducer(state,action){
//     if(action.type==="Add"){
//         return [action.payload, ...state];
//     }else if(action.type==="Delete"){
//         return state.filter(post => post.id !== action.payload)
//     }else return 

// }
// const db=getDatabase(app);
// const Compo=({children})=>{

// //for firebase database
// const db=getDatabase();

// function putData(url,title,body,id){
   
//         set(ref(db,'users/'+id),{
//             url:url,
//             title:title,
//             Body:body
            
      
//     })
// }














//     const [arr, dispatch] =useReducer(reducer,initial);
    
//     const add=(url,title,body)=>{
//         putData(url,title,body,Date.now());
//         const newPost={
//             id:Date.now(),
//             url:url,
//             title:title,
//             body:body,
//         }
//         dispatch({
//             type:"Add",
//             payload:newPost
//         })
        
//     }
//     const del=(id)=>{
//       dispatch({
//         type:"Delete",

//         payload:id
//       })
//     }


//     return(
//         <Context.Provider value={{arr,add,del}}>
//             {children}
//         </Context.Provider>
//     )
// }
// export {Context,Compo};











import { getDatabase, ref, set, onValue,remove } from "firebase/database";
import { app } from './firebase';
import { useReducer, createContext, useEffect } from "react";

const initial = [];
const Context = createContext({
    arr: initial,
    add: () => {},
    del: () => {}
});

function reducer(state, action) {
    if (action.type === "Add") {
        return [action.payload, ...state];
    } else if (action.type === "Delete") {
        return state.filter(post => post.id !== action.payload);
    } else if (action.type === "Set") {
        return action.payload;
    } else return state;
}

const db = getDatabase(app);
const Compo = ({ children }) => {
    const [arr, dispatch] = useReducer(reducer, initial);

    // Function to add data to Firebase
    function putData(url, title, body, id) {
        set(ref(db, 'users/' + id), {
            url: url,
            title: title,
            body: body
        });
    }

    function deleteData(path) {
        const db = getDatabase(app);
        const dataRef = ref(db, 'users/'+path);
    
        remove(dataRef)
            .then(() => {
                console.log('Data deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
    }
    

    // Function to fetch data from Firebase
    function fetchData() {
        const dataRef = ref(db, 'users/');
        onValue(dataRef, (snapshot) => {
            const data = [];
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                data.push({
                    id: childSnapshot.key,
                    ...childData
                });
            });
            dispatch({
                type: "Set",
                payload: data
            });
        });
    }

    useEffect(() => {
        fetchData();

    }, []);

    const add = (url, title, body) => {
        const id = Date.now();
        putData(url, title, body, id);
        // const newPost = {
        //     id: id,
        //     url: url,
        //     title: title,
        //     body: body,
        // };
        // dispatch({
        //     type: "Add",
        //     payload: newPost
        // });
    };

    const del = (id) => {
       deleteData(id);
        dispatch({
            type: "Delete",
            payload: id
        });

    };
  
    console.log(arr);
    return (
        <Context.Provider value={{ arr, add, del }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Compo };
