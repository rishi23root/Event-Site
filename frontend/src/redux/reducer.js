import * as Types from "./types";

export const initialState = {
    auth: {},
    updatedAt: new Date()
}

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.UPDATE_AUTH:
            state = {
                auth: payload,
                updatedAt: new Date()
            }
            return state;
        default:
            return state;
    }
}