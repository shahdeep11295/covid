import {HOMEDATA} from '../constant'
export default function(state={rem:{}}, action){
    switch(action.type){
        
        case HOMEDATA:
            return{
                ...state,
                rem:action.payload,
            }
        default:
            return state
    }
}