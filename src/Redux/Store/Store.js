import reducerStateLoginAuth from  '../reducerStateLoginAuth';
var redux = require('redux');
let reducerThongHop = redux.combineReducers({
    reducerStateLoginAuth: reducerStateLoginAuth
})
let Store = redux.createStore(reducerThongHop);
// Store.subscribe(()=>{
//     console.log(JSON.stringify(Store.getState()));
// })
export default Store;