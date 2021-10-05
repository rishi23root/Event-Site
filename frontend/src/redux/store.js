import { createStore } from 'redux';
import { initialState, Reducer } from './reducer';
import * as Types from "./types";

export const store = createStore(Reducer, initialState);

store.subscribe(()=>{
    console.log("Store now is -",store.getState());
})

// store.dispatch({
//     type: Types.UPDATE_AUTH,
//     payload: "idk"
// })

// store.dispatch({
//     type: Types.UPDATE_AUTH,
//     payload: "asdfasd"
// })


export const updateAuth = (newAuth) => {
    store.dispatch({
        type: Types.UPDATE_AUTH,
        payload: newAuth
    })
}

export const getAuth = () =>{
    return store.getState();
}