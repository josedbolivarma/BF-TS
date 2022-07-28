import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesComments } from "../types/types";
 
//---------------listar----------------//
export const listCommentsAsync = () => {
    return async ( dispatch: any ) => {
        const collectionTraer = await getDocs(collection(db, "posts"));
        const comments: any = [];
        collectionTraer.forEach((doc) => {
            comments.push({
                ...doc.data()
            })
        })
        dispatch(listCommentsSync(comments));
    }
}

export const listCommentsSync = ( comments: any ) => {
    return {
        type: typesComments.list,
        payload: comments
    }
}

//-------------agregar---------------//
export const addCommentAsync = ( comment: any ) => {
    return ( dispatch: any ) => {
        addDoc(collection(db, "posts"), comment)
            .then(resp => {
                dispatch(addCommentSync(comment));
            })
            .catch(error => {
                console.warn(error);
            })

    }
}


//-------------agregar---------------//
export const addPostFirestore = ( email: any, pass: any, name: any, role: any, uid: any ) => {
   
    let user = {
        email: email,
        password: pass,
        nombre: name,
        role: role
    }
    return async ( dispatch: any ) => {
        // Add a new document in collection "cities" with "LA" add id
        await setDoc(doc(db, "posts/", uid), user);
   
    }
}


export const addCommentSync = ( comment: any ) => {
    return {
        type: typesComments.add,
        payload: comment
    }
}