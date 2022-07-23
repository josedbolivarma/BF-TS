import { typesProductos } from "../types/types";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action: any ) => {
    switch (action.type) {
            case typesProductos.list: 
                return {
                    products: [...action.payload]
                }
                
            default:
                return state;
    }
}