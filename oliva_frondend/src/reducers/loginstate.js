const loginState = "";


const setLoginStates = (state = loginState, action)=>{
    switch(action.type){
        case "LOG_IN":
            state = action.payload;
        default:
            return state;
    }
}
export default setLoginStates;