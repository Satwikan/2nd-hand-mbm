export function userReducer(state = null, action){
    switch(action.type){
        case "LOGIN_USER":
            return action.payload;
        case "LOG_OUT":
            return action.payload;
        default:
            return state;
    }
}