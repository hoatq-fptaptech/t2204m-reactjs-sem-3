const reducer = (state,action) => { // action: {type:.., payload:..}
    switch(action.type){
        case "UPDATE_CART": return {
            ...state,
            cart: action.payload
        };
        default: return state;
    }
}
export default reducer;