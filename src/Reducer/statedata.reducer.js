import {STATEDATA} from '../constant'
export default function(state={statewise:{}}, action){
    switch(action.type){
        
        case STATEDATA:
            return{
                ...state,
                statewise:action.payload,
            }
        default:
            return state
    }
}