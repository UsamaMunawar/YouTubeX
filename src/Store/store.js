import { createStore, applyMiddleware} from 'redux';


import thunk from 'redux-thunk';
import dataReducer from '../Reducers';

const initialState = {key: '1'};
const middleWare = [thunk];
const store = createStore(dataReducer, initialState, applyMiddleware(...middleWare));

export default store;