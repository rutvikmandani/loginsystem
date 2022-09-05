

const initialState = {
    userData: [],
    currentUser: []
}

export const Reducer = (state = initialState, {payload, type}) => {

    switch(type){
        case "FATCH_DATA" :
            return{
                ...state,
                userData: payload
            }
        case "STORE_DATA" :
            return{
                ...state,
                userData: payload,
            }
        case "CURRENT_USER" :
            return{
                ...state,
                currentUser: payload,
            }
        case "REMOVE_USER" :
            return{
                ...state,
                currentUser: [],
            }
        default:
            return state
        }
}
