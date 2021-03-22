import { LOAD_DATA } from '../Actions/types';

const initialState = {
    data: []
}

export default function (state = initialState, action) {
    console.log('dataReducer called')

    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state
    }

   
}