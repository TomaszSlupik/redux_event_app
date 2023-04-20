import { SET_EVENTS, SET_CALENDAR, EDIT_EVENT } from "../consts";

export const setEvents = (event) => {
    return {
        type: SET_EVENTS,
        payload: {
            event
        }
    }
}

export const setCalendar = (data) => {
    return {
        type: SET_CALENDAR,
        payload: {
            data
        }
    }
}

export const setEditEvent = (currentName, newName) => {
    return {
        type: EDIT_EVENT,
        payload: {
            currentName, 
            newName
        }
    }
}