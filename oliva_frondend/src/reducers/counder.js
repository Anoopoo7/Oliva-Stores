const productInitialState = null;


const setProductStates = (state = productInitialState, action)=>{
    switch(action.type){
        case "SET_PRODUCT_STATE":
            state = action.payload;
        default:
            return state;
    }
}
export default setProductStates;