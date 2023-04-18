import { SET_EVENTS } from "../consts";

export const setEvents = (event) => {
    return {
        type: SET_EVENTS,
        payload: {
            event
        }
    }
}