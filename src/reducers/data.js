import { RECEIVE_API_DATA } from '../actions';

export default (state= [], action) => {

    console.log('reducer invoked', action);
    switch(action.type){

        case RECEIVE_API_DATA :
            return action.data

        default :
        return state;
    }
    
}