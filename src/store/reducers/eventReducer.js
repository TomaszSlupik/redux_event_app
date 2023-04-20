import { SET_EVENTS, SET_CALENDAR, EDIT_EVENT } from "../consts";

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
        case EDIT_EVENT:
            const {currentName, newName} = action.payload
            return {
                ...state,
                event_name: state.event_name.map((event) => {
                    if (event.event_name === currentName) {
                        return {
                            ...event, event_name: newName
                        }
                    }
                    else {
                        return event
                    }
                })
            }
        default:
            return state
    }
}