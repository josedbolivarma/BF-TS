// Selector
export const getCartTotal = ( cart: any ) => cart?.reduce(( amount: any , item: any ) => item.precio + amount, 0);