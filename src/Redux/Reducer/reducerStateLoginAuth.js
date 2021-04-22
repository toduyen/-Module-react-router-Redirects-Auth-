const loginAuthInitialState = {dataLogin: ''};
const reducerStateLoginAuth = (state = loginAuthInitialState, action) => {
    switch (action.type) {
        case "CHANGE_STATE_LOGIN":
            return {...state,dataLogin:action.getString};
        default:
            return state;
    }
}
export default reducerStateLoginAuth;