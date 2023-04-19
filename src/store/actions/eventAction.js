import { SET_EVENTS, SET_CALENDAR } from "../consts";

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