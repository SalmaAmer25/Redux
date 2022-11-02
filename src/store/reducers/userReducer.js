export const userReducer = (state=[],action)=>{
    if(action.type == "USER-LIST") return action.payload;
    return state;

};