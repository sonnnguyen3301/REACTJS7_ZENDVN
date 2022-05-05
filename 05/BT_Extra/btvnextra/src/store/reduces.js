import { GITHUB_DATALIST } from "./action"

const initState = {
    data: []
}

export function reducers (state = initState, action ){
    switch(action.type){
        case GITHUB_DATALIST:
            return{
                data:action.payload.info
            }
        default:
            return state
    }
}