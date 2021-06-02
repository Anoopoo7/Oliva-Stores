export const setProductStates = (data) =>{
    return{
        type:'SET_PRODUCT_STATE',
        payload : data
    }
}

export const setLoginStates = (data) =>{
    return{
        type:'LOG_IN',
        payload : data
    }
}