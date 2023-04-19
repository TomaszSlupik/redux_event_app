import { SET_EVENTS, SET_CALENDAR } from "../consts";

const initstate = {
    event_name: "",
    event_calendar: ""
}

export const eventReducer = (state=initstate, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state, 
                event_name: action.payload.event
            }
        case SET_CALENDAR:
            return {
                ...state, 
                event_calendar: action.payload.data
            }
        default:
            return state
    }
}