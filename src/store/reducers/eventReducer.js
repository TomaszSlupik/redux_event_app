import { SET_EVENTS } from "../consts";

const initstate = {
    event_name: "Testujemy Reducer"
}

export const eventReducer = (state=initstate, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state, 
                event_name: action.payload.event
            }
        default:
            return state
    }
}