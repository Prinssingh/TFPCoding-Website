import { combineReducers } from 'redux';
import productReducer from './product/reducers';
import {ChangeLayoutMode} from './themeLayout/reducers';


const rootReducer = combineReducers({
    product: productReducer,
    layout: ChangeLayoutMode,
    
});

export default rootReducer; 