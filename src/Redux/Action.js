import { FATCH_DATA, STORE_DATA } from "./ActionType"

export const FatchData = (payload) => {
    return dispatch => {
        let userData = localStorage.getItem("user")
        if (userData) {
            dispatch({ type: FATCH_DATA, payload: JSON.parse(userData) })
        }
        else {
            dispatch({ type: FATCH_DATA, payload: [] })
        }
    }
}

export const StoreData = (payload) => {
    localStorage.setItem("user", JSON.stringify(payload))
    return {
        type: STORE_DATA,
        payload
    }
}

export const CurrentUser = (payload,setIsHome) => {
    localStorage.setItem("currentUser", JSON.stringify(payload))
    setIsHome(true)
    return {
        type: STORE_DATA,
        payload
    }
}

export const RemoveUser = (setIsLogout) => {
    localStorage.removeItem("currentUser")
    setIsLogout(true)
    return {
        type: STORE_DATA,
    }
}