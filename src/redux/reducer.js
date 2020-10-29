import { DECREMENT, INCREMENT, LOGIN, LOGOUT } from "./types";

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return state + action.payload;
//         case DECREMENT:
//             return state - action.payload;
//         default:
//             return state;
//     }
// }
const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return action.payload;
        default:
            return state;
    }
}
export default reducer;