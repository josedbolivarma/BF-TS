import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesProductos } from "../types/types";

// TODO // // TODO // // TODO // // TODO // // TODO // // TODO // // TODO // // TODO // // TODO //
//---------------listar----------------//
export const listAsync = () => {
    return async ( dispatch: any ) => {
        const collectionTraer = await getDocs(collection( db, "productosDB"));
        const productos: any = [];
        collectionTraer.forEach((doc) => {
            productos.push({
                ...doc.data()
            })
        })
        dispatch(listSync(productos));
    }
}

export const listSync = ( productos: any ) => {
    return {
        type: typesProductos.list,
        payload: productos
    }
}