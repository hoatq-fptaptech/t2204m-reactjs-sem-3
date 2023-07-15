const reducer = (state,action) => { // action: {type:.., payload:..}
    switch(action.type){
        case "UPDATE_CART": return {
            ...state,
            cart: action.payload,
            loading:true
        };
        case "SHOW_LOADING": return {...state,loading:true};
        case "HIDE_LOADING": return {...state,loading:false};
        default: return state;
    }
}
export default reducer;