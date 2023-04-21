import { SET_EVENTS, SET_CALENDAR, EDIT_EVENT, DELETE_EVENT } from "../consts";

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
        case DELETE_EVENT:
            const {eventDelete} = action.payload
            return {
                ...state, 
                event_name: state.event_name.filter((el) => {
                    return el.event_name !== eventDelete
                })
            }
        default:
            return state
    }
}